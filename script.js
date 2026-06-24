const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.setAttribute("data-aos", "zoom-in");
    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("button-group");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    completeBtn.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");
    });

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    buttonGroup.appendChild(completeBtn);
    buttonGroup.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(buttonGroup);

    taskList.appendChild(li);

    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});