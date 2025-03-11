import Projects from "./modules/Projects.js";
import Tasks from "./modules/Tasks.js";
import Task from "./modules/Task.js";
import UI from "./modules/UI.js";

if (!localStorage.getItem("projects")) {
  console.log("Constructing new local storage project...");
  Projects.construct();
}

if (
  !localStorage.getItem("tasks") &&
  !localStorage.getItem("dueTodayTasks") &&
  !localStorage.getItem("dueThisWeekTasks") &&
  !localStorage.getItem("importantTasks") &&
  !localStorage.getItem("completedTasks")
) {
  console.log("Constructing new local storage task...");
  Tasks.construct();
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.loadLandingPage();
});
