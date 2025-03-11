import Project from "./Project";

export default class Projects {
  static #array = [];

  static construct() {
    localStorage.setItem("projects", JSON.stringify(Projects.#array));
  }

  static add(project) {
    Projects.#array = JSON.parse(localStorage.getItem("projects"));
    Projects.#array.push(project);
    localStorage.setItem("projects", JSON.stringify(Projects.#array));
  }

  static rename(id, name) {
    Projects.#array = JSON.parse(localStorage.getItem("projects"));

    // When localStorage stores the objects, they lose their methods and private fields.
    // Only public fields are persistant.
    // Hence, we have to convert the objects back to Project instances.
    Projects.#array = Projects.#array.map(
      (object) => new Project(object.id, object.name)
    );

    id = Number(id);
    const project = Projects.#array.find((p) => p.getId() === id);
    project.setName(name);
    localStorage.setItem("projects", JSON.stringify(Projects.#array));
  }

  static remove(id) {
    Projects.#array = JSON.parse(localStorage.getItem("projects"));

    // When localStorage stores the objects, they lose their methods and private fields.
    // Only public fields are persistant.
    // Hence, we have to convert the objects back to Project instances.
    Projects.#array = Projects.#array.map(
      (object) => new Project(object.id, object.name)
    );

    id = Number(id);
    const project = Projects.#array.find((p) => p.getId() === id);
    const index = Projects.#array.indexOf(project);

    Projects.#array.splice(index, 1);
    for (let newId = 1; newId <= Projects.#array.length; newId++) {
      Projects.#array[newId - 1].id = newId;
    }
    localStorage.setItem("projects", JSON.stringify(Projects.#array));
  }

  static getAll() {
    Projects.#array = JSON.parse(localStorage.getItem("projects"));
    return Projects.#array;
  }

  static size() {
    Projects.#array = JSON.parse(localStorage.getItem("projects"));
    return Projects.#array.length;
  }
}
