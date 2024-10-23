
function addTask() {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }


    let newTask = document.createElement('li');
    newTask.textContent = taskText;


    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function () {
        newTask.remove();
    };

    
    newTask.onclick = function () {
        newTask.classList.toggle('completed');
    };

    
    newTask.appendChild(deleteBtn);

    document.getElementById('task-list').appendChild(newTask);


    taskInput.value = '';
}
