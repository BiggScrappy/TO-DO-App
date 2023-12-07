const tasksList = document.getElementById('tasks');
const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');

addTaskButton.addEventListener('click', () => {
    const newTask = document.createElement('li');
    newTask.innerText = newTask
