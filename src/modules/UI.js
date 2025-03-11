import "../styles.css";
import menuImg from "../assets/menu.svg";
import darkImg from "../assets/dark.svg";
import allTaskImg from "../assets/task.svg";
import dueToday from "../assets/dueToday.svg";
import importantImg from "../assets/important.svg";
import dueThisWeek from "../assets/dueThisWeek.svg";
import gitHubImg from "../assets/gitHub.svg";
import viewProjectSVG from "../assets/project.svg";
import addImg from "../assets/add.svg";
import addCompletedImg from "../assets/add-completed.svg";
import addImportantImg from "../assets/add-important.svg";
import importantTaskImg from "../assets/important-task.svg";
import editTaskImg from "../assets/edit-task.svg";
import deleteTaskImg from "../assets/delete-task.svg";
import viewTaskImg from "../assets/view-task.svg";
import projectActionSVG from "../assets/project-action.svg";
import completedImg from "../assets/completed.svg";
import Projects from "./Projects";
import Project from "./Project";
import Tasks from "./Tasks";
import Task from "./Task";

const homeSectionImg = [allTaskImg, dueToday, dueThisWeek, importantImg];

export default class UI {
  loadLandingPage() {
    this.loadTemplate();
    this.loadHeader();
    this.loadMain();
    this.loadFooter();
  }

  loadTemplate() {
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
  }

  loadHeader() {
    const header = document.querySelector("header");
    const menuBtn = document.createElement("img");
    menuBtn.id = "menuBtn";
    menuBtn.src = menuImg;
    menuBtn.height = "32";
    menuBtn.width = "32";

    const h1 = document.createElement("h1");
    h1.textContent = "DoYourSheet";

    const appearanceBtn = document.createElement("div");
    appearanceBtn.id = "appearanceBtn";
    const img = document.createElement("img");
    img.id = "appearanceBtnImg";
    img.src = darkImg;
    img.height = "32";
    img.width = "32";
    appearanceBtn.appendChild(img);

    header.append(menuBtn, h1, appearanceBtn);
    this.appearanceBtnEvent();
  }

  appearanceBtnEvent() {
    const appearanceBtn = document.querySelector("#appearanceBtn");
    appearanceBtn.addEventListener("click", () => {
      alert("Here");
    });
  }

  loadMain() {
    const main = document.querySelector("main");
    const sidebar = document.createElement("aside");
    sidebar.id = "sidebar";
    const content = document.createElement("div");
    content.id = "content";
    main.append(sidebar, content);

    this.loadSidebar();
    this.loadContent();
    this.menuBtnEvent();
  }

  menuBtnEvent() {
    const menuBtn = document.querySelector("#menuBtn");
    const sidebar = document.querySelector("#sidebar");
    const content = document.querySelector("#content");
    menuBtn.addEventListener("click", () => {
      if (sidebar.classList.contains("hideSidebar")) {
        sidebar.classList.remove("hideSidebar");
        content.classList.remove("fullContent");
      } else {
        sidebar.classList.add("hideSidebar");
        content.classList.add("fullContent");
      }
    });
  }

  loadSidebar() {
    const sidebar = document.querySelector("#sidebar");
    const homeSection = document.createElement("section");
    homeSection.id = "homeSection";
    const projectSection = document.createElement("section");
    projectSection.id = "projectSection";
    sidebar.append(homeSection, projectSection);

    this.loadHomeSection();
    this.loadProjectSection();
  }

  loadHomeSection() {
    const homeSection = document.querySelector("#homeSection");
    const h2 = document.createElement("h2");
    h2.textContent = "Home";
    h2.className = "title";
    const ul = document.createElement("ul");

    for (let i = 0; i < homeSectionImg.length; i++) {
      const li = document.createElement("li");
      const buttonImg = document.createElement("img");
      buttonImg.src = homeSectionImg[i];
      buttonImg.height = "24";
      buttonImg.width = "24";
      const button = document.createElement("button");
      button.className = "navigationBtn";
      const p = document.createElement("p");
      if (i === 0) {
        button.id = "allTaskBtn";
        p.textContent = "All Tasks";
      } else if (i === 1) {
        button.id = "dueTodayBtn";
        p.textContent = "Due Today";
      } else if (i === 2) {
        button.id = "dueThisWeekBtn";
        p.textContent = "Due This Week";
      } else {
        button.id = "importantBtn";
        p.textContent = "Important";
      }
      button.append(buttonImg, p);
      li.appendChild(button);
      ul.appendChild(li);
    }

    homeSection.append(h2, ul);
    this.navigationBtnEvent();
  }

  navigationBtnEvent() {
    const allNavigationBtn = document.querySelectorAll(".navigationBtn");
    allNavigationBtn.forEach((navigationBtn) => {
      navigationBtn.addEventListener("click", (e) => {
        const clickedButton = e.target.closest(".navigationBtn");
        const clickedButtonId = clickedButton.id;
        if (clickedButtonId === "allTaskBtn") {
          const allTasks = Tasks.getAll();
          this.loadNavigationTasks(clickedButtonId, allTasks);
        } else if (clickedButtonId === "dueTodayBtn") {
          Tasks.checkDueToday();
          const dueTodayTasks = Tasks.getAllDueToday();
          this.loadNavigationTasks(clickedButtonId, dueTodayTasks);
        } else if (clickedButtonId === "dueThisWeekBtn") {
          Tasks.checkDueThisWeek();
          const dueThisWeekTasks = Tasks.getAllDueThisWeek();
          this.loadNavigationTasks(clickedButtonId, dueThisWeekTasks);
        } else {
          Tasks.checkImportant();
          const importantTasks = Tasks.getAllImportant();
          this.loadNavigationTasks(clickedButtonId, importantTasks);
        }
      });
    });
  }

  loadProjectSection() {
    const projectSection = document.querySelector("#projectSection");
    this.clearChildren(projectSection);
    const h2 = document.createElement("h2");
    h2.className = "title";
    h2.textContent = "Projects";

    const projects = Projects.getAll();
    const projectSectionContainer = document.createElement("ul");
    projectSectionContainer.id = "projectSectionContainer";

    projectSection.append(h2, projectSectionContainer);
    this.loadAllProjects(projects);

    const addProjectContainer = document.createElement("li");
    addProjectContainer.id = "addProjectContainer";
    projectSectionContainer.appendChild(addProjectContainer);

    this.loadAddProjectBtn();
  }

  viewProjectBtnEvent() {
    const allViewProjectBtn = document.querySelectorAll(".viewProjectBtn");
    allViewProjectBtn.forEach((viewProjectBtn) => {
      viewProjectBtn.addEventListener("click", (e) => {
        const viewProjectContainer = e.target.closest(".viewProjectContainer");
        this.loadProjectTasks(viewProjectContainer.id);
      });
    });
  }

  loadAllProjects(projects) {
    const projectSectionContainer = document.querySelector(
      "#projectSectionContainer"
    );
    projects.forEach((project) => {
      const viewProjectContainer = document.createElement("li");
      viewProjectContainer.id = project.id;
      viewProjectContainer.className = "viewProjectContainer";
      viewProjectContainer.classList.add(`project-${project.id}`);

      projectSectionContainer.appendChild(viewProjectContainer);
      this.loadViewProjectBtn(project.id, project);
      this.loadProjectActionBtn(project.id);
      this.loadProjectActionContainer(project.id);
    });
    this.viewProjectBtnEvent();
    this.projectActionBtnEvent();
    this.deleteProjectBtnEvent();
    this.renameProjectBtnEvent();
  }

  loadViewProjectBtn(id, project) {
    const viewProjectContainer = document.querySelector(
      `.viewProjectContainer.project-${id}`
    );
    const viewProjectBtn = document.createElement("button");
    viewProjectBtn.className = "viewProjectBtn";
    const viewProjectImg = document.createElement("img");
    viewProjectImg.src = viewProjectSVG;
    viewProjectImg.height = "24";
    viewProjectImg.width = "24";
    const viewProjectText = document.createElement("p");
    viewProjectText.textContent = project.name;
    viewProjectBtn.append(viewProjectImg, viewProjectText);
    viewProjectContainer.appendChild(viewProjectBtn);
  }

  loadProjectActionBtn(id) {
    const viewProjectContainer = document.querySelector(
      `.viewProjectContainer.project-${id}`
    );
    const projectActionBtn = document.createElement("button");
    projectActionBtn.className = "projectActionBtn";
    const projectActionImg = document.createElement("img");
    projectActionImg.src = projectActionSVG;
    projectActionImg.height = "24";
    projectActionImg.width = "24";
    projectActionBtn.appendChild(projectActionImg);
    viewProjectContainer.appendChild(projectActionBtn);
  }

  loadProjectActionContainer(id) {
    const viewProjectContainer = document.querySelector(
      `.viewProjectContainer.project-${id}`
    );
    const projectActionContainer = document.createElement("div");
    projectActionContainer.className = "projectActionContainer";
    projectActionContainer.classList.add(`project-${id}`);

    const renameProjectBtn = document.createElement("button");
    renameProjectBtn.textContent = "Rename";
    renameProjectBtn.className = "renameProjectBtn";
    const deleteProjectBtn = document.createElement("button");
    deleteProjectBtn.textContent = "Delete";
    deleteProjectBtn.className = "deleteProjectBtn";
    projectActionContainer.append(renameProjectBtn, deleteProjectBtn);
    projectActionContainer.classList.add("hideProjectActionContainer");
    viewProjectContainer.appendChild(projectActionContainer);
  }

  projectActionBtnEvent() {
    const allProjectActionBtn = document.querySelectorAll(".projectActionBtn");
    allProjectActionBtn.forEach((projectActionBtn) => {
      projectActionBtn.addEventListener("click", (e) => {
        const clickedButton = e.target.closest(".projectActionBtn");
        const viewProjectContainer = clickedButton.closest(
          ".viewProjectContainer"
        );
        const projectActionContainer = viewProjectContainer.querySelector(
          ".projectActionContainer"
        );

        document
          .querySelectorAll(".showProjectActionContainer")
          .forEach((container) => {
            if (container !== projectActionContainer) {
              container.classList.remove("showProjectActionContainer");
              container.classList.add("hideProjectActionContainer");
            }
          });

        if (
          projectActionContainer.classList.contains(
            "hideProjectActionContainer"
          )
        ) {
          projectActionContainer.classList.remove("hideProjectActionContainer");
          projectActionContainer.classList.add("showProjectActionContainer");
        } else {
          projectActionContainer.classList.remove("showProjectActionContainer");
          projectActionContainer.classList.add("hideProjectActionContainer");
        }
      });
    });
  }

  deleteProjectBtnEvent() {
    const allDeleteProjectBtn = document.querySelectorAll(".deleteProjectBtn");
    allDeleteProjectBtn.forEach((deleteProjectBtn) => {
      deleteProjectBtn.addEventListener("click", (e) => {
        const viewProjectContainer = e.target.closest(".viewProjectContainer");
        const id = viewProjectContainer.id;
        Projects.remove(id);
        Tasks.removeAllProjectTasks(id);
        this.loadProjectSection();
        const allTasks = Tasks.getAll();
        this.loadNavigationTasks("allTaskBtn", allTasks);
      });
    });
  }

  renameProjectBtnEvent() {
    const allRenameProjectBtn = document.querySelectorAll(".renameProjectBtn");
    allRenameProjectBtn.forEach((renameProjectBtn) => {
      renameProjectBtn.addEventListener("click", (e) => {
        const viewProjectContainer = e.target.closest(".viewProjectContainer");
        const id = viewProjectContainer.id;
        this.loadRenameProjectInput(viewProjectContainer);

        const cancelRenameProjectBtn = viewProjectContainer.querySelector(
          ".cancelRenameProjectBtn"
        );
        const confirmRenameProjectBtn = viewProjectContainer.querySelector(
          ".confirmRenameProjectBtn"
        );
        const renameProjectInput = viewProjectContainer.querySelector(
          ".renameProjectInput"
        );

        cancelRenameProjectBtn.addEventListener("click", () => {
          viewProjectContainer.classList.remove("showRenameProjectInput");
          this.loadProjectSection();
        });

        confirmRenameProjectBtn.addEventListener("click", () => {
          if (!this.validateInput(renameProjectInput.value)) {
            alert("Project Name Can't Be Empty, Please Name It");
            renameProjectInput.focus();
          } else {
            Projects.rename(id, renameProjectInput.value);
            console.log("Rename Successfully!");
            this.loadProjectSection();
          }
        });
      });
    });
  }

  loadRenameProjectInput(viewProjectContainer) {
    this.clearChildren(viewProjectContainer);
    viewProjectContainer.classList.add("showRenameProjectInput");

    const renameProjectInput = document.createElement("input");
    renameProjectInput.setAttribute("required", "true");
    renameProjectInput.className = "renameProjectInput";
    renameProjectInput.type = "text";
    renameProjectInput.focus();

    const cancelRenameProjectBtn = document.createElement("button");
    cancelRenameProjectBtn.className = "cancelRenameProjectBtn";
    cancelRenameProjectBtn.textContent = "Cancel";
    const confirmRenameProjectBtn = document.createElement("button");
    confirmRenameProjectBtn.className = "confirmRenameProjectBtn";
    confirmRenameProjectBtn.textContent = "Confirm";
    viewProjectContainer.append(
      renameProjectInput,
      cancelRenameProjectBtn,
      confirmRenameProjectBtn
    );
  }

  loadAddProjectBtn() {
    const addProjectContainer = document.querySelector("#addProjectContainer");
    this.clearChildren(addProjectContainer);
    const addProjectBtn = document.createElement("button");
    addProjectBtn.id = "addProjectBtn";
    const addProjectImg = document.createElement("img");
    addProjectImg.src = addImg;
    addProjectImg.height = "24";
    addProjectImg.width = "24";
    const addProjectText = document.createElement("p");
    addProjectText.textContent = "Add New Project";
    addProjectBtn.append(addProjectImg, addProjectText);
    addProjectContainer.appendChild(addProjectBtn);

    this.addProjectBtnEvent();
  }

  loadAddProjectInput() {
    const addProjectContainer = document.querySelector("#addProjectContainer");
    this.clearChildren(addProjectContainer);
    addProjectContainer.classList.add("showAddProjectInput");
    const addProjectInput = document.createElement("input");
    addProjectInput.setAttribute("required", "true");
    addProjectInput.id = "addProjectInput";
    addProjectInput.type = "text";
    addProjectInput.focus();

    const cancelAddProjectBtn = document.createElement("button");
    cancelAddProjectBtn.id = "cancelAddProjectBtn";
    cancelAddProjectBtn.textContent = "Cancel";
    const confirmAddProjectBtn = document.createElement("button");
    confirmAddProjectBtn.id = "confirmAddProjectBtn";
    confirmAddProjectBtn.textContent = "Confirm";
    addProjectContainer.append(
      addProjectInput,
      cancelAddProjectBtn,
      confirmAddProjectBtn
    );
  }

  addProjectBtnEvent() {
    const addProjectContainer = document.querySelector("#addProjectContainer");
    const addProjectBtn = document.querySelector("#addProjectBtn");
    addProjectBtn.addEventListener("click", () => {
      this.loadAddProjectInput();
      const cancelAddProjectBtn = document.querySelector(
        "#cancelAddProjectBtn"
      );
      const confirmAddProjectBtn = document.querySelector(
        "#confirmAddProjectBtn"
      );
      const addProjectInput = document.querySelector("#addProjectInput");

      cancelAddProjectBtn.addEventListener("click", () => {
        addProjectContainer.classList.remove("showAddProjectInput");
        this.loadAddProjectBtn();
      });

      confirmAddProjectBtn.addEventListener("click", () => {
        if (!this.validateInput(addProjectInput.value)) {
          alert("Project Name Can't Be Empty, Please Name It");
          addProjectInput.focus();
        } else {
          const project = new Project(
            Projects.size() + 1,
            addProjectInput.value
          );
          alert(`Project ${project.name} has been added`);
          Projects.add(project);
          this.loadProjectSection();
        }
      });
    });
  }

  clearChildren(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  }

  validateInput(value) {
    return value != null && value.trim() !== "";
  }

  loadContent() {
    const content = document.querySelector("#content");
    const h1 = document.createElement("h1");
    h1.id = "contentTitle";
    const taskSection = document.createElement("section");
    taskSection.className = "taskSection";
    const form = document.createElement("form");
    form.id = "taskForm";
    form.className = "hideTaskForm";

    content.append(h1, taskSection, form);

    const allTasks = Tasks.getAll();
    this.loadNavigationTasks("allTaskBtn", allTasks);
  }

  loadAddTaskForm() {
    const form = document.querySelector("#taskForm");
    this.clearChildren(form);
    form.removeEventListener("submit", this.handleTaskEdit); // Prevent edit handler interference

    const h2 = document.createElement("h2");
    h2.className = "taskFormTitle";
    h2.textContent = "New Task";

    const name = document.createElement("div");
    name.className = "addTaskFormInputContainer";
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name";
    nameLabel.setAttribute("for", "taskName");
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.required = true;
    nameInput.id = "taskName";
    nameInput.setAttribute("name", "taskName");
    name.append(nameLabel, nameInput);

    const description = document.createElement("div");
    description.className = "addTaskFormInputContainer";
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description (Optional)";
    descriptionLabel.setAttribute("for", "taskDescription");
    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "taskDescription";
    descriptionInput.setAttribute("name", "taskDescription");
    description.append(descriptionLabel, descriptionInput);

    const dueDate = document.createElement("div");
    dueDate.className = "addTaskFormInputContainer";
    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date";
    dueDateLabel.setAttribute("for", "taskDueDate");
    const dueDateInput = document.createElement("input");
    dueDateInput.required = true;
    dueDateInput.setAttribute("type", "date");
    dueDateInput.id = "taskDueDate";
    dueDateInput.setAttribute("name", "taskDueDate");
    dueDate.append(dueDateLabel, dueDateInput);

    const addTaskFormActionContainer = document.createElement("div");
    addTaskFormActionContainer.id = "addTaskFormActionContainer";
    const cancelAddTaskBtn = document.createElement("button");
    cancelAddTaskBtn.id = "cancelAddTaskBtn";
    cancelAddTaskBtn.textContent = "Cancel";
    const confirmAddTaskBtn = document.createElement("button");
    confirmAddTaskBtn.setAttribute("type", "submit");
    confirmAddTaskBtn.id = "confirmAddTaskBtn";
    confirmAddTaskBtn.textContent = "Confirm";
    addTaskFormActionContainer.append(cancelAddTaskBtn, confirmAddTaskBtn);

    form.append(h2, name, description, dueDate, addTaskFormActionContainer);

    this.cancelAddTaskBtnEvent();
    this.confirmAddTaskBtnEvent();
  }

  loadViewTaskForm(id) {
    const form = document.querySelector("#taskForm");
    this.clearChildren(form);
    const h2 = document.createElement("h2");
    h2.className = "taskFormTitle";
    h2.textContent = "Task Details";

    id = Number(id);
    const task = Tasks.get(id);

    const name = document.createElement("div");
    name.className = "addTaskFormInputContainer";
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name";
    nameLabel.setAttribute("for", "taskName");
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.required = true;
    nameInput.id = "taskName";
    nameInput.setAttribute("name", "taskName");
    nameInput.value = task.name;
    nameInput.disabled = true;
    name.append(nameLabel, nameInput);

    const description = document.createElement("div");
    description.className = "addTaskFormInputContainer";
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description (Optional)";
    descriptionLabel.setAttribute("for", "taskDescription");
    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "taskDescription";
    descriptionInput.setAttribute("name", "taskDescription");
    descriptionInput.value = task.description;
    descriptionInput.disabled = true;
    description.append(descriptionLabel, descriptionInput);

    const dueDate = document.createElement("div");
    dueDate.className = "addTaskFormInputContainer";
    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date";
    dueDateLabel.setAttribute("for", "taskDueDate");
    const dueDateInput = document.createElement("input");
    dueDateInput.required = true;
    dueDateInput.setAttribute("type", "date");
    dueDateInput.id = "taskDueDate";
    dueDateInput.setAttribute("name", "taskDueDate");
    dueDateInput.value = task.dueDate;
    dueDateInput.disabled = true;
    dueDate.append(dueDateLabel, dueDateInput);

    const viewTaskFormActionContainer = document.createElement("div");
    viewTaskFormActionContainer.id = "viewTaskFormActionContainer";
    const closeViewTaskBtn = document.createElement("button");
    closeViewTaskBtn.id = "closeViewTaskBtn";
    closeViewTaskBtn.textContent = "Close";
    viewTaskFormActionContainer.append(closeViewTaskBtn);

    form.append(h2, name, description, dueDate, viewTaskFormActionContainer);
    this.closeViewTaskBtnEvent();
  }

  loadEditTaskForm(id) {
    const form = document.querySelector("#taskForm");
    this.clearChildren(form);
    form.removeEventListener("submit", this.handleTaskSubmit); // Prevent add handler interference

    const h2 = document.createElement("h2");
    h2.className = "taskFormTitle";
    h2.textContent = "Editing Task";

    id = Number(id);
    const task = Tasks.get(id);

    const name = document.createElement("div");
    name.className = "addTaskFormInputContainer";
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name";
    nameLabel.setAttribute("for", "taskName");
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.required = true;
    nameInput.id = "taskName";
    nameInput.setAttribute("name", "taskName");
    nameInput.value = task.name;
    name.append(nameLabel, nameInput);

    const description = document.createElement("div");
    description.className = "addTaskFormInputContainer";
    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Description (Optional)";
    descriptionLabel.setAttribute("for", "taskDescription");
    const descriptionInput = document.createElement("textarea");
    descriptionInput.id = "taskDescription";
    descriptionInput.setAttribute("name", "taskDescription");
    descriptionInput.value = task.description;
    description.append(descriptionLabel, descriptionInput);

    const dueDate = document.createElement("div");
    dueDate.className = "addTaskFormInputContainer";
    const dueDateLabel = document.createElement("label");
    dueDateLabel.textContent = "Due Date";
    dueDateLabel.setAttribute("for", "taskDueDate");
    const dueDateInput = document.createElement("input");
    dueDateInput.required = true;
    dueDateInput.setAttribute("type", "date");
    dueDateInput.id = "taskDueDate";
    dueDateInput.setAttribute("name", "taskDueDate");
    dueDateInput.value = task.dueDate;
    dueDate.append(dueDateLabel, dueDateInput);

    const editTaskFormActionContainer = document.createElement("div");
    editTaskFormActionContainer.id = "editTaskFormActionContainer";
    const cancelEditTaskBtn = document.createElement("button");
    cancelEditTaskBtn.id = "cancelEditTaskBtn";
    cancelEditTaskBtn.textContent = "Cancel";
    const confirmEditTaskBtn = document.createElement("button");
    confirmEditTaskBtn.setAttribute("type", "submit");
    confirmEditTaskBtn.id = "confirmEditTaskBtn";
    confirmEditTaskBtn.textContent = "Confirm";
    editTaskFormActionContainer.append(cancelEditTaskBtn, confirmEditTaskBtn);

    form.append(h2, name, description, dueDate, editTaskFormActionContainer);

    this.cancelEditTaskBtnEvent();
    this.confirmEditProjectBtnEvent(id);
  }

  closeViewTaskBtnEvent() {
    const form = document.querySelector("#taskForm");
    const closeViewTaskBtn = document.querySelector("#closeViewTaskBtn");
    closeViewTaskBtn.addEventListener("click", () => {
      form.classList.remove("showTaskForm");
      form.classList.add("hideTaskForm");
    });
  }

  cancelAddTaskBtnEvent() {
    const form = document.querySelector("#taskForm");
    const cancelAddTaskBtn = document.querySelector("#cancelAddTaskBtn");
    cancelAddTaskBtn.addEventListener("click", () => {
      form.classList.remove("showTaskForm");
      form.classList.add("hideTaskForm");
    });
  }

  confirmAddTaskBtnEvent() {
    const form = document.querySelector("#taskForm");
    form.removeEventListener("submit", this.handleTaskSubmit);
    form.removeEventListener("submit", this.handleTaskEdit); // Ensure no edit handler remains
    form.addEventListener("submit", this.handleTaskSubmit.bind(this));
  }

  handleTaskSubmit(e) {
    e.preventDefault();
    const form = document.querySelector("#taskForm");

    const taskName = form.querySelector("#taskName")?.value.trim() || "";
    const taskDescription =
      form.querySelector("#taskDescription")?.value.trim() || "";
    const taskDueDate = form.querySelector("#taskDueDate")?.value || "";

    if (!taskName || !taskDueDate) {
      alert("⚠️ Task name and due date are required.");
      return;
    }

    const taskSection = form.previousSibling;
    const projectId = taskSection?.id;

    if (!projectId) {
      console.error("❌ Error: Project ID not found!");
      return;
    }

    const task = new Task(
      Number(projectId),
      Tasks.size() + 1,
      taskName,
      taskDescription,
      taskDueDate,
      false,
      false
    );

    Tasks.add(task);
    this.loadProjectTasks(projectId);

    form.reset();
    form.classList.remove("showTaskForm");
    form.classList.add("hideTaskForm");
  }

  cancelEditTaskBtnEvent() {
    const form = document.querySelector("#taskForm");
    const cancelEditTaskBtn = document.querySelector("#cancelEditTaskBtn");
    cancelEditTaskBtn.addEventListener("click", () => {
      form.classList.remove("showTaskForm");
      form.classList.add("hideTaskForm");
    });
  }

  confirmEditProjectBtnEvent(id) {
    const form = document.querySelector("#taskForm");
    form.removeEventListener("submit", this.handleTaskSubmit); // Ensure no add handler remains
    form.removeEventListener("submit", this.handleTaskEdit);
    form.addEventListener("submit", (e) => this.handleTaskEdit(e, id));
  }

  handleTaskEdit(e, id) {
    e.preventDefault();
    const form = document.querySelector("#taskForm");

    const taskName = form.querySelector("#taskName")?.value.trim() || "";
    const taskDescription =
      form.querySelector("#taskDescription")?.value.trim() || "";
    const taskDueDate = form.querySelector("#taskDueDate")?.value || "";

    if (!taskName || !taskDueDate) {
      alert("⚠️ Task name and due date are required.");
      return;
    }

    const taskSection = form.previousSibling;
    const projectId = taskSection?.id;
    if (!projectId) {
      console.error("❌ Error: Project ID not found!");
      return;
    }

    console.log("🔍 Editing Task with ID:", id);
    console.log("🔍 BEFORE Update:", Tasks.get(id));

    Tasks.updateTask(id, {
      name: taskName,
      description: taskDescription,
      dueDate: taskDueDate,
    });

    console.log("✅ AFTER Update:", Tasks.get(id));
    this.loadProjectTasks(projectId);

    form.classList.remove("showTaskForm");
    form.classList.add("hideTaskForm");
  }

  loadNavigationTasks(taskType, tasks) {
    const contentTitle = document.querySelector("#contentTitle");
    this.clearChildren(contentTitle);
    const taskSection = document.querySelector(".taskSection");
    this.clearChildren(taskSection);
    const form = document.querySelector("#taskForm");
    if (form.classList.contains("showTaskForm")) {
      form.classList.remove("showTaskForm");
      form.classList.add("hideTaskForm");
    }

    switch (taskType) {
      case "allTaskBtn":
        contentTitle.textContent = "All Tasks";
        break;
      case "dueTodayBtn":
        contentTitle.textContent = "Due Today";
        break;
      case "dueThisWeekBtn":
        contentTitle.textContent = "Due This Week";
        break;
      case "importantBtn":
        contentTitle.textContent = "Important";
        break;
      default:
        console.error("Error: taskType is not found!");
        return;
    }

    if (taskType === "allTaskBtn" && Tasks.size() < 1) {
      const taskContainer = document.createElement("div");
      taskContainer.className = "taskContainer";
      taskContainer.textContent = "There is no task currently";
      taskSection.appendChild(taskContainer);
      return;
    } else if (taskType === "dueTodayBtn" && Tasks.dueTodaySize() < 1) {
      const taskContainer = document.createElement("div");
      taskContainer.className = "taskContainer";
      taskContainer.textContent = "There is no task that is due today";
      taskSection.appendChild(taskContainer);
      return;
    } else if (taskType === "dueThisWeekBtn" && Tasks.dueThisWeekSize() < 1) {
      const taskContainer = document.createElement("div");
      taskContainer.className = "taskContainer";
      taskContainer.textContent = "There is no task that is due this week";
      taskSection.appendChild(taskContainer);
      return;
    } else if (taskType === "importantBtn" && Tasks.importantSize() < 1) {
      const taskContainer = document.createElement("div");
      taskContainer.className = "taskContainer";
      taskContainer.textContent = "There is no important task currently";
      taskSection.appendChild(taskContainer);
      return;
    }

    tasks.forEach((task) => {
      const taskContainer = document.createElement("div");
      taskContainer.className = "taskContainer";
      taskContainer.id = task.id;

      const left = document.createElement("div");
      left.className = "taskLeft";
      const addCompletedBtn = document.createElement("img");
      addCompletedBtn.className = "addCompletedBtn";
      addCompletedBtn.width = "24";
      addCompletedBtn.height = "24";
      const taskTitle = document.createElement("p");
      taskTitle.className = "taskTitle";
      taskTitle.textContent = task.name;
      if (!task.completed) {
        addCompletedBtn.src = addCompletedImg;
        taskTitle.classList.remove("isCompleted");
      } else {
        addCompletedBtn.src = completedImg;
        taskTitle.classList.add("isCompleted");
      }
      left.append(addCompletedBtn, taskTitle);

      const right = document.createElement("div");
      right.className = "taskRight";
      const dueDate = document.createElement("p");
      dueDate.className = "dueDate";
      dueDate.textContent = task.dueDate;
      const addImportantBtn = document.createElement("img");
      addImportantBtn.className = "addImportantBtn";
      if (!task.important) {
        addImportantBtn.src = addImportantImg;
        addImportantBtn.classList.remove("isImportant");
      } else {
        addImportantBtn.src = importantTaskImg;
        addImportantBtn.classList.add("isImportant");
      }
      addImportantBtn.width = "24";
      addImportantBtn.height = "24";
      const viewTaskBtn = document.createElement("img");
      viewTaskBtn.className = "viewTaskBtn";
      viewTaskBtn.src = viewTaskImg;
      viewTaskBtn.width = "24";
      viewTaskBtn.height = "24";
      const editTaskBtn = document.createElement("img");
      editTaskBtn.className = "editTaskBtn";
      editTaskBtn.src = editTaskImg;
      editTaskBtn.width = "24";
      editTaskBtn.height = "24";
      const deleteTaskBtn = document.createElement("img");
      deleteTaskBtn.className = "deleteTaskBtn";
      deleteTaskBtn.src = deleteTaskImg;
      deleteTaskBtn.width = "24";
      deleteTaskBtn.height = "24";
      right.append(
        dueDate,
        addImportantBtn,
        viewTaskBtn,
        editTaskBtn,
        deleteTaskBtn
      );

      taskContainer.append(left, right);
      taskSection.append(taskContainer);
    });

    this.addCompletedBtnEvent();
    this.addImportantBtnEvent();
    this.viewTaskBtnEvent();
    this.editTaskBtnEvent();
    this.deleteTaskBtnEvent();
  }

  loadProjectTasks(id) {
    id = Number(id);
    const projects = Projects.getAll();
    const project = projects.find((p) => p.id === id);
    const contentTitle = document.querySelector("#contentTitle");
    const taskSection = document.querySelector(".taskSection");

    this.clearChildren(contentTitle);
    this.clearChildren(taskSection);

    contentTitle.textContent = project.name;
    taskSection.id = id;

    const tasks = Tasks.getAll() || [];
    const filteredTasks = tasks.filter((task) => task.projectId === id);

    if (filteredTasks.length < 1) {
      const taskContainer = document.createElement("div");
      taskContainer.className = "taskContainer";
      taskContainer.textContent = `There is no task for ${project.name} project`;
      taskSection.append(taskContainer);
    } else {
      filteredTasks.forEach((task) => {
        const taskContainer = document.createElement("div");
        taskContainer.className = "taskContainer";
        taskContainer.id = task.id;

        const left = document.createElement("div");
        left.className = "taskLeft";
        const addCompletedBtn = document.createElement("img");
        addCompletedBtn.className = "addCompletedBtn";
        addCompletedBtn.width = "24";
        addCompletedBtn.height = "24";
        const taskTitle = document.createElement("p");
        taskTitle.className = "taskTitle";
        taskTitle.textContent = task.name;
        if (!task.completed) {
          addCompletedBtn.src = addCompletedImg;
          taskTitle.classList.remove("isCompleted");
        } else {
          addCompletedBtn.src = completedImg;
          taskTitle.classList.add("isCompleted");
        }
        left.append(addCompletedBtn, taskTitle);

        const right = document.createElement("div");
        right.className = "taskRight";
        const dueDate = document.createElement("p");
        dueDate.className = "dueDate";
        dueDate.textContent = task.dueDate;
        const addImportantBtn = document.createElement("img");
        addImportantBtn.className = "addImportantBtn";
        if (!task.important) {
          addImportantBtn.src = addImportantImg;
        } else {
          addImportantBtn.src = importantTaskImg;
        }
        addImportantBtn.width = "24";
        addImportantBtn.height = "24";
        const viewTaskBtn = document.createElement("img");
        viewTaskBtn.className = "viewTaskBtn";
        viewTaskBtn.src = viewTaskImg;
        viewTaskBtn.width = "24";
        viewTaskBtn.height = "24";
        const editTaskBtn = document.createElement("img");
        editTaskBtn.className = "editTaskBtn";
        editTaskBtn.src = editTaskImg;
        editTaskBtn.width = "24";
        editTaskBtn.height = "24";
        const deleteTaskBtn = document.createElement("img");
        deleteTaskBtn.className = "deleteTaskBtn";
        deleteTaskBtn.src = deleteTaskImg;
        deleteTaskBtn.width = "24";
        deleteTaskBtn.height = "24";
        right.append(
          dueDate,
          addImportantBtn,
          viewTaskBtn,
          editTaskBtn,
          deleteTaskBtn
        );

        taskContainer.append(left, right);
        taskSection.append(taskContainer);
      });
    }

    const addTaskContainer = document.createElement("div");
    addTaskContainer.className = "addTaskContainer";
    addTaskContainer.id = id;
    taskSection.append(addTaskContainer);

    this.loadAddTaskBtn();
    this.addCompletedBtnEvent();
    this.addImportantBtnEvent();
    this.viewTaskBtnEvent();
    this.editTaskBtnEvent();
    this.deleteTaskBtnEvent();
  }

  addCompletedBtnEvent() {
    const allAddCompletedBtn = document.querySelectorAll(".addCompletedBtn");
    allAddCompletedBtn.forEach((addCompletedBtn) => {
      addCompletedBtn.addEventListener("click", (e) => {
        const taskLeft = e.target.closest(".taskLeft");
        const taskTitle = taskLeft.querySelector(".taskTitle");
        const button = e.target.closest(".addCompletedBtn");
        const id = e.target.closest(".taskContainer").id;
        if (taskTitle.classList.contains("isCompleted")) {
          taskTitle.classList.remove("isCompleted");
          button.src = addCompletedImg;
          Tasks.removeCompleted(id);
        } else {
          taskTitle.classList.add("isCompleted");
          button.src = completedImg;
          Tasks.addCompleted(id);
        }
      });
    });
  }

  addImportantBtnEvent() {
    const allAddImportantBtn = document.querySelectorAll(".addImportantBtn");
    allAddImportantBtn.forEach((addImportantBtn) => {
      addImportantBtn.addEventListener("click", (e) => {
        const button = e.target.closest(".addImportantBtn");
        const id = e.target.closest(".taskContainer").id;
        if (button.classList.contains("isImportant")) {
          button.src = addImportantImg;
          button.classList.remove("isImportant");
          Tasks.removeImportant(id);
        } else {
          button.src = importantTaskImg;
          button.classList.add("isImportant");
          Tasks.addImportant(id);
        }
      });
    });
  }

  deleteTaskBtnEvent() {
    const allDeleteTaskBtn = document.querySelectorAll(".deleteTaskBtn");
    allDeleteTaskBtn.forEach((deleteTaskBtn) => {
      deleteTaskBtn.addEventListener("click", (e) => {
        const taskContainer = e.target.closest(".taskContainer");
        const id = taskContainer.id;
        const taskSection = taskContainer.closest(".taskSection");
        const projectId = taskSection.id;

        Tasks.remove(id);
        if (projectId) {
          this.loadProjectTasks(projectId);
        } else {
          const taskType = document
            .querySelector("#contentTitle")
            .textContent.toLowerCase()
            .replace(" ", "");
          const tasks =
            taskType === "alltasks"
              ? Tasks.getAll()
              : taskType === "duetoday"
              ? Tasks.getAllDueToday()
              : taskType === "duethisweek"
              ? Tasks.getAllDueThisWeek()
              : Tasks.getAllImportant();
          this.loadNavigationTasks(
            taskType === "alltasks"
              ? "allTaskBtn"
              : taskType === "duetoday"
              ? "dueTodayBtn"
              : taskType === "duethisweek"
              ? "dueThisWeekBtn"
              : "importantBtn",
            tasks
          );
        }
      });
    });
  }

  loadAddTaskBtn() {
    const addTaskContainer = document.querySelector(".addTaskContainer");
    const addTaskBtn = document.createElement("button");
    addTaskBtn.id = "addTaskBtn";
    const addTaskImg = document.createElement("img");
    addTaskImg.src = addImg;
    addTaskImg.height = "24";
    addTaskImg.width = "24";
    const addTaskText = document.createElement("p");
    addTaskText.textContent = "Add New Task";
    addTaskBtn.append(addTaskImg, addTaskText);
    addTaskContainer.appendChild(addTaskBtn);

    this.addTaskBtnEvent();
  }

  addTaskBtnEvent() {
    const taskForm = document.querySelector("#taskForm");
    taskForm.reset();
    const addTaskBtn = document.querySelector("#addTaskBtn");
    addTaskBtn.addEventListener("click", () => {
      if (taskForm.classList.contains("hideTaskForm")) {
        taskForm.classList.remove("hideTaskForm");
        taskForm.classList.add("showTaskForm");
        this.loadAddTaskForm();
      } else {
        taskForm.classList.remove("showTaskForm");
        taskForm.classList.add("hideTaskForm");
      }
    });
  }

  viewTaskBtnEvent() {
    const taskForm = document.querySelector("#taskForm");
    taskForm.reset();
    const allViewTaskBtn = document.querySelectorAll(".viewTaskBtn");
    allViewTaskBtn.forEach((viewTaskBtn) => {
      viewTaskBtn.addEventListener("click", (e) => {
        const id = e.target.closest(".taskContainer").id;
        if (taskForm.classList.contains("hideTaskForm")) {
          taskForm.classList.remove("hideTaskForm");
          taskForm.classList.add("showTaskForm");
          this.loadViewTaskForm(id);
        } else {
          taskForm.classList.remove("showTaskForm");
          taskForm.classList.add("hideTaskForm");
        }
      });
    });
  }

  editTaskBtnEvent() {
    const taskForm = document.querySelector("#taskForm");
    taskForm.reset();
    const allEditTaskBtn = document.querySelectorAll(".editTaskBtn");
    allEditTaskBtn.forEach((editTaskBtn) => {
      editTaskBtn.addEventListener("click", (e) => {
        const id = e.target.closest(".taskContainer").id;
        if (taskForm.classList.contains("hideTaskForm")) {
          taskForm.classList.remove("hideTaskForm");
          taskForm.classList.add("showTaskForm");
          this.loadEditTaskForm(id);
        } else {
          taskForm.classList.remove("showTaskForm");
          taskForm.classList.add("hideTaskForm");
        }
      });
    });
  }

  loadFooter() {
    const footer = document.querySelector("footer");
    const line1 = document.createElement("span");
    line1.textContent = "|";
    const line2 = document.createElement("span");
    line2.textContent = "|";
    const icons = document.createElement("span");
    icons.textContent = "Icons by ";
    icons.innerHTML += `<a href="https://www.svgrepo.com/">SVG Repo</a>`;
    const gitHub = document.createElement("img");
    gitHub.src = gitHubImg;
    gitHub.height = "16";
    gitHub.width = "16";
    const owner = document.createElement("p");
    owner.textContent = "Choun Chan Nirak";

    footer.append(icons, line1, gitHub, line2, owner);
  }
}
