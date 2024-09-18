const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);

function addTask() {
    const taskValue = taskInput.value.trim();
    
    if (taskValue !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task">${taskValue}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;
        
        listItem.querySelector('.task').addEventListener('click', function() {
            this.classList.toggle('completed');
        });
        
        listItem.querySelector('.delete-btn').addEventListener('click', function() {
            taskList.removeChild(listItem);
        });
        
        listItem.querySelector('.edit-btn').addEventListener('click', function() {
            const taskText = listItem.querySelector('.task');
            const newTask = prompt('Edit your task:', taskText.textContent);
            if (newTask) {
                taskText.textContent = newTask;
            }
        });
        
        taskList.appendChild(listItem);
        
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
}
