
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');


function addTask() {
    const task = taskInput.value.trim();

    if (task !== '') {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            deleteTask(taskItem);
        });

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}


function deleteTask(taskItem) {
    taskList.removeChild(taskItem);
}


addButton.addEventListener('click', addTask);


taskInput.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        addTask();
    }
});