export default class Task {
  constructor(
    projectId,
    id,
    name,
    description = "",
    dueDate,
    important = false,
    completed = false
  ) {
    this.projectId = Number(projectId); // Number
    this.id = Number(id); // Number
    this.name = name; // String
    this.description = description; // String and Optional
    this.dueDate = dueDate; // String
    this.important = important; // Boolean
    this.completed = completed; // Boolean
  }

  getId() {
    return this.id;
  }

  getProjectId() {
    return this.projectId;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getDescription() {
    return this.desription;
  }

  setDescription(description) {
    this.description = description;
  }

  getDueDate() {
    return this.dueDate;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  getImportant() {
    return this.important;
  }

  setImportant(important) {
    this.important = important;
  }

  getCompleted() {
    return this.completed;
  }

  setCompleted(completed) {
    this.completed = completed;
  }
}
