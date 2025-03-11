import { differenceInDays, isEqual, isSameDay } from "date-fns";
import Task from "./Task";

export default class Tasks {
  static #array = [];
  static #dueToday = [];
  static #dueThisWeek = [];
  static #important = [];
  static #completed = [];

  static construct() {
    localStorage.setItem("tasks", JSON.stringify(Tasks.#array));
    localStorage.setItem("dueTodayTasks", JSON.stringify(Tasks.#dueToday));
    localStorage.setItem(
      "dueThisWeekTasks",
      JSON.stringify(Tasks.#dueThisWeek)
    );
    localStorage.setItem("importantTasks", JSON.stringify(Tasks.#important));
    localStorage.setItem("completedTasks", JSON.stringify(Tasks.#completed));
  }

  static add(task) {
    Tasks.#array = JSON.parse(localStorage.getItem("tasks")) || [];
    const existingTask = Tasks.#array.find((t) => t.id === task.id);
    if (existingTask) {
      console.warn(`Task with ID ${task.id} already exists. Updating instead.`);
      Tasks.updateTask(task.id, {
        name: task.name,
        description: task.description,
        dueDate: task.dueDate,
        important: task.important,
        completed: task.completed,
      });
    } else {
      Tasks.#array.push(task);
      localStorage.setItem("tasks", JSON.stringify(Tasks.#array));
      Tasks.checkDueToday();
      Tasks.checkDueThisWeek();
      Tasks.checkImportant();
    }
  }

  static updateTask(id, { name, description, dueDate, important, completed }) {
    Tasks.#array = JSON.parse(localStorage.getItem("tasks")) || [];
    id = Number(id);

    const taskIndex = Tasks.#array.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      console.error(`❌ Task with ID ${id} not found for updating.`);
      return;
    }

    const task = Tasks.#array[taskIndex];
    console.log(`🔍 BEFORE Update:`, task);

    // Update only provided fields
    if (name !== undefined) task.name = name;
    if (description !== undefined) task.description = description;
    if (dueDate !== undefined) task.dueDate = dueDate;
    if (important !== undefined) task.important = important;
    if (completed !== undefined) task.completed = completed;

    Tasks.#array[taskIndex] = task;
    localStorage.setItem("tasks", JSON.stringify(Tasks.#array));

    console.log(`✅ AFTER Update:`, Tasks.#array[taskIndex]);

    // Sync related arrays after update
    Tasks.checkDueToday();
    Tasks.checkDueThisWeek();
    Tasks.checkImportant();
    Tasks.syncCompleted();
  }

  static remove(id) {
    Tasks.#array = JSON.parse(localStorage.getItem("tasks")) || [];
    id = Number(id);

    const taskIndex = Tasks.#array.findIndex((t) => t.id === id);
    if (taskIndex === -1) {
      console.error(`❌ Task with ID ${id} not found for removal.`);
      return;
    }

    Tasks.#array.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(Tasks.#array));

    // Reassign IDs to maintain consecutive order
    Tasks.#array.forEach((task, index) => (task.id = index + 1));
    localStorage.setItem("tasks", JSON.stringify(Tasks.#array));

    // Sync related arrays
    Tasks.removeOther(id);
    Tasks.checkDueToday();
    Tasks.checkDueThisWeek();
    Tasks.checkImportant();
    Tasks.syncCompleted();
  }

  static get(id) {
    Tasks.#array = JSON.parse(localStorage.getItem("tasks")) || [];
    id = Number(id);
    return Tasks.#array.find((t) => t.id === id) || null;
  }

  static getAll() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }

  static removeOther(id) {
    Tasks.removeImportant(id);
    Tasks.removeDueToday(id);
    Tasks.removeDueThisWeek(id);
    Tasks.removeCompleted(id);
  }

  static removeAllProjectTasks(projectId) {
    Tasks.#array = JSON.parse(localStorage.getItem("tasks")) || [];
    projectId = Number(projectId);

    Tasks.#array = Tasks.#array.filter((task) => task.projectId !== projectId);
    Tasks.#array.forEach((task, index) => (task.id = index + 1));
    localStorage.setItem("tasks", JSON.stringify(Tasks.#array));

    Tasks.checkDueToday();
    Tasks.checkDueThisWeek();
    Tasks.checkImportant();
    Tasks.syncCompleted();
  }

  static size() {
    return (JSON.parse(localStorage.getItem("tasks")) || []).length;
  }

  static dueTodaySize() {
    return (JSON.parse(localStorage.getItem("dueTodayTasks")) || []).length;
  }

  static dueThisWeekSize() {
    return (JSON.parse(localStorage.getItem("dueThisWeekTasks")) || []).length;
  }

  static importantSize() {
    return (JSON.parse(localStorage.getItem("importantTasks")) || []).length;
  }

  static completedSize() {
    return (JSON.parse(localStorage.getItem("completedTasks")) || []).length;
  }

  // Legacy methods (replaced by updateTask, kept for compatibility if needed)
  static rename(id, name) {
    Tasks.updateTask(id, { name });
  }

  static updateDescription(id, description) {
    Tasks.updateTask(id, { description });
  }

  static updateDueDate(id, dueDate) {
    Tasks.updateTask(id, { dueDate });
  }

  static updateImportant(id, important) {
    Tasks.updateTask(id, { important });
  }

  static updateCompleted(id, completed) {
    Tasks.updateTask(id, { completed });
  }

  static addImportant(id) {
    Tasks.#array = JSON.parse(localStorage.getItem("tasks")) || [];
    id = Number(id);

    const task = Tasks.#array.find((t) => t.id === id);
    if (!task) return;

    task.important = true;
    localStorage.setItem("tasks", JSON.stringify(Tasks.#array));

    Tasks.#important = JSON.parse(localStorage.getItem("importantTasks")) || [];
    if (!Tasks.#important.some((t) => t.id === id)) {
      Tasks.#important.push(task);
      localStorage.setItem("importantTasks", JSON.stringify(Tasks.#important));
    }
  }

  static removeImportant(id) {
    Tasks.#array = JSON.parse(localStorage.getItem("tasks")) || [];
    id = Number(id);

    const task = Tasks.#array.find((t) => t.id === id);
    if (!task) return;

    task.important = false;
    localStorage.setItem("tasks", JSON.stringify(Tasks.#array));

    Tasks.#important = JSON.parse(localStorage.getItem("importantTasks")) || [];
    Tasks.#important = Tasks.#important.filter((t) => t.id !== id);
    localStorage.setItem("importantTasks", JSON.stringify(Tasks.#important));
  }

  static checkImportant() {
    Tasks.#array = JSON.parse(localStorage.getItem("tasks")) || [];
    Tasks.#important = Tasks.#array.filter((task) => task.important);
    localStorage.setItem("importantTasks", JSON.stringify(Tasks.#important));
  }

  static getAllImportant() {
    return JSON.parse(localStorage.getItem("importantTasks")) || [];
  }

  static isDueToday(dueDate) {
    const today = new Date();
    return isSameDay(today, new Date(dueDate));
  }

  static checkDueToday() {
    Tasks.#array = JSON.parse(localStorage.getItem("tasks")) || [];
    Tasks.#dueToday = Tasks.#array.filter((task) =>
      isSameDay(new Date(), new Date(task.dueDate))
    );
    localStorage.setItem("dueTodayTasks", JSON.stringify(Tasks.#dueToday));
  }

  static removeDueToday(id) {
    Tasks.#dueToday = JSON.parse(localStorage.getItem("dueTodayTasks")) || [];
    id = Number(id);
    Tasks.#dueToday = Tasks.#dueToday.filter((t) => t.id !== id);
    localStorage.setItem("dueTodayTasks", JSON.stringify(Tasks.#dueToday));
  }

  static getAllDueToday() {
    return JSON.parse(localStorage.getItem("dueTodayTasks")) || [];
  }

  static checkDueThisWeek() {
    const today = new Date();
    Tasks.#array = JSON.parse(localStorage.getItem("tasks")) || [];
    Tasks.#dueThisWeek = Tasks.#array.filter((task) => {
      const taskDueDate = new Date(task.dueDate);
      const daysDiff = differenceInDays(taskDueDate, today);
      return daysDiff >= 1 && daysDiff <= 7;
    });
    localStorage.setItem(
      "dueThisWeekTasks",
      JSON.stringify(Tasks.#dueThisWeek)
    );
  }

  static removeDueThisWeek(id) {
    Tasks.#dueThisWeek =
      JSON.parse(localStorage.getItem("dueThisWeekTasks")) || [];
    id = Number(id);
    Tasks.#dueThisWeek = Tasks.#dueThisWeek.filter((t) => t.id !== id);
    localStorage.setItem(
      "dueThisWeekTasks",
      JSON.stringify(Tasks.#dueThisWeek)
    );
  }

  static getAllDueThisWeek() {
    return JSON.parse(localStorage.getItem("dueThisWeekTasks")) || [];
  }

  static addCompleted(id) {
    Tasks.updateTask(id, { completed: true });
  }

  static removeCompleted(id) {
    Tasks.#array = JSON.parse(localStorage.getItem("tasks")) || [];
    id = Number(id);

    const task = Tasks.#array.find((t) => t.id === id);
    if (!task) return;

    task.completed = false;
    localStorage.setItem("tasks", JSON.stringify(Tasks.#array));

    Tasks.#completed = JSON.parse(localStorage.getItem("completedTasks")) || [];
    Tasks.#completed = Tasks.#completed.filter((t) => t.id !== id);
    localStorage.setItem("completedTasks", JSON.stringify(Tasks.#completed));
  }

  static syncCompleted() {
    Tasks.#array = JSON.parse(localStorage.getItem("tasks")) || [];
    Tasks.#completed = Tasks.#array.filter((task) => task.completed);
    localStorage.setItem("completedTasks", JSON.stringify(Tasks.#completed));
  }

  static getAllCompleted() {
    return JSON.parse(localStorage.getItem("completedTasks")) || [];
  }
}
