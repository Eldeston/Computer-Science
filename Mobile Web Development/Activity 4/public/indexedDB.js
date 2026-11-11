// This variable stores the opened database connection.
// The functions below use it to access the tasks object store.
let db;

// Open current database
function openDatabase() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open("StudentPlannerDB", 1);

        request.onupgradeneeded = function (event) {
            db = event.target.result;
            if (!db.objectStoreNames.contains("tasks")) {
                db.createObjectStore("tasks", {
                    keyPath: "id", autoIncrement: true
                });
            }
        };

        request.onsuccess = function () {
            db = request.result;
            resolve(db);
        };

        request.onerror = () => reject(request.error);
    });
}

// ADD a new task
function addTask(task) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["tasks"], "readwrite");
        const store = transaction.objectStore("tasks");
        store.add(task);
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

// READ all tasks
function getAllTasks() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["tasks"], "readonly");
        const store = transaction.objectStore("tasks");
        const request = store.getAll();
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
    });
}

// UPDATE an existing task
function updateTask(task) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["tasks"], "readwrite");
        const store = transaction.objectStore("tasks");
        store.put(task);
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

// DELETE a task using its id
function deleteTask(id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(["tasks"], "readwrite");
        const store = transaction.objectStore("tasks");
        store.delete(id);
        transaction.oncomplete = () => resolve();
        transaction.onerror = () => reject(transaction.error);
    });
}

export {
    openDatabase,
    addTask,
    getAllTasks,
    updateTask,
    deleteTask
};