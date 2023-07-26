const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const taskItem = document.createElement("li");
  taskItem.innerHTML = `
        <input type="checkbox" onchange="toggleTaskCompletion(event)">
        <span class="task-text">${taskText}</span>
        <button onclick="removeTask(event)">Remove</button>
    `;

  taskList.appendChild(taskItem);
  taskInput.value = "";
}

function removeTask(event) {
  const taskItem = event.target.parentNode;
  taskList.removeChild(taskItem);
}

function toggleTaskCompletion(event) {
  const taskItem = event.target.parentNode;
  taskItem.classList.toggle("completed");
}

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
