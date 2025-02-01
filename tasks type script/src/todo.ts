interface Task {
  id: number;
  text: string;
  isEditing: boolean;
}

let tasks: Task[] = [];
let taskId = 0;

// DOM Elements
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addButton = document.getElementById("addButton") as HTMLButtonElement;
const taskList = document.getElementById("taskList") as HTMLUListElement;

if (!taskInput || !addButton || !taskList) {
  console.error("Required DOM elements are missing!");
  throw new Error("Critical DOM elements are not found.");
}

// Add Task
addButton.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return; // Ignore empty input

  tasks.push({ id: taskId++, text, isEditing: false });
  taskInput.value = ""; // Clear the input field
  renderTasks();
});

// Render Tasks
function renderTasks(): void {
  if (taskList) {
    taskList.innerHTML = ""; // Clear the task list
  }

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = task.isEditing ? "editing" : "";

    // If the task is in editing mode
    if (task.isEditing) {
      const input = document.createElement("input");
      input.type = "text";
      input.value = task.text;

      const saveButton = document.createElement("button");
      saveButton.textContent = "Save";
      saveButton.type = "button"; // Prevent default form behavior
      saveButton.classList.add("save-button");
      saveButton.addEventListener("click", () =>
        saveTask(task.id, input.value)
      );

      li.appendChild(input);
      li.appendChild(saveButton);
    } else {
      // Display task in normal mode
      const span = document.createElement("span");
      span.textContent = task.text;

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.type = "button"; // Prevent default form behavior
      editButton.addEventListener("click", () => editTask(task.id));

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.type = "button"; // Prevent default form behavior
      deleteButton.addEventListener("click", () => deleteTask(task.id));

      const controls = document.createElement("div");
      controls.classList.add("task-controls");
      controls.appendChild(editButton);
      controls.appendChild(deleteButton);

      li.appendChild(span);
      li.appendChild(controls);
    }

    if (taskList) {
      taskList.appendChild(li);
    }
  });
}

// Edit Task
function editTask(id: number): void {
  tasks = tasks.map((task) =>
    task.id === id ? { ...task, isEditing: true } : task
  );
  renderTasks();
}

// Save Task
function saveTask(id: number, newText: string): void {
  if (!newText.trim()) return; // Ignore empty input

  tasks = tasks.map((task) =>
    task.id === id ? { ...task, text: newText.trim(), isEditing: false } : task
  );
  renderTasks();
}

// Delete Task
function deleteTask(id: number): void {
  tasks = tasks.filter((task) => task.id !== id);
  renderTasks();
}
