/* Database Functions */

import {
    openDatabase,
    addTask,
    getAllTasks,
    updateTask,
    deleteTask,
    clearTasks
} from "./indexed-db.js";

/* Planner Core */

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const syncBtn = document.getElementById("syncBtn");
const taskList = document.getElementById("taskList");
const logoutBtn = document.getElementById("logoutBtn");

const params = new URLSearchParams(window.location.search);
const email = params.get("email");

if (!email) {
    taskList.innerHTML = "<li>No user specified.</li>";
    throw new Error("Missing email");
}

async function loadTasks() {
    try {
        const response = await fetch(`/api/tasks/${email}`);

        if (!response.ok) {
            throw new Error("Failed to load tasks");
        }

        const tasks = await response.json();

        taskList.innerHTML = "";

        tasks.forEach(task => {
            const li = document.createElement("li");
            li.className = "task-item";

            const taskText = document.createElement("span");
            taskText.textContent = task.title;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "delete-btn";

            deleteBtn.addEventListener("click", async () => {
                try {
                    const response = await fetch(
                        `/api/tasks/${email}/${task._id}`,
                        {
                            method: "DELETE"
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Delete failed");
                    }

                    await loadTasks();
                } catch (err) {
                    console.error(err);
                    alert("Failed to delete task.");
                }
            });

            li.appendChild(taskText);
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
        });
    } catch (error) {
        console.error(error);
        taskList.innerHTML = "<li>Failed to load tasks.</li>";
    }
}

loadTasks();

logoutBtn.addEventListener("click", () => {
    window.location.replace("/");
});

form.addEventListener("submit", async event => {
    event.preventDefault();

    const task = input.value.trim();

    if (!task) return;

    try {
        const response = await fetch(
            `/api/tasks/${email}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: crypto.randomUUID(),
                    title: task
                })
            }
        );

        if (!response.ok) {
            throw new Error("Failed to create task");
        }

        input.value = "";
        await loadTasks();
    } catch (error) {
        console.error("Add task failed:", error);
    }
});

syncBtn.addEventListener("click", async () => {
    try {
        syncBtn.disabled = true;

        const localTasks = await getAllTasks();

        // Upload local tasks
        for (const task of localTasks) {
            await fetch(`/api/tasks/${email}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: task.id,
                    title: task.title
                })
            });
        }

        // Download MongoDB copy
        const response = await fetch(
            `/api/tasks/${email}`
        );

        const mongoTasks =
            await response.json();

        await clearTasks();

        for (const task of mongoTasks) {
            await addTask(task);
        }

        await loadTasks();

        alert("Sync complete!");
    }
    catch (err) {
        console.error(err);
        alert("Sync failed.");
    }
    finally {
        syncBtn.disabled = false;
    }
});