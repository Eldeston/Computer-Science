const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach(function(task, index) {
        const li = document.createElement("li");
        li.className = "task-item";

        const taskText = document.createElement("span");
        taskText.textContent = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
        });

        li.appendChild(taskText);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

form.addEventListener("submit", function(event){
    event.preventDefault();
 
    const task = input.value.trim();
 
    if(task === "") return;
 
    tasks.push(task);
 
    localStorage.setItem("tasks", JSON.stringify(tasks));
 
    input.value = "";
    displayTasks();
});

displayTasks();