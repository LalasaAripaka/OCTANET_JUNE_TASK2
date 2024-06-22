// Task list array to store tasks
let tasks = [];

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = {
            id: Date.now().toString(),
            text: taskText,
            completed: false
        };

        tasks.push(newTask);
        taskInput.value = '';
        renderTasks();
    }
}

// Function to delete a task
function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

// Function to mark task as completed
function toggleComplete(taskId) {
    tasks.forEach(task => {
        if (task.id === taskId) {
            task.completed = !task.completed;
        }
    });
    renderTasks();
}

// Function to render tasks in the task list
function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item' + (task.completed ? ' completed' : '');
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button onclick="toggleComplete('${task.id}')">${task.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="deleteTask('${task.id}')">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}
