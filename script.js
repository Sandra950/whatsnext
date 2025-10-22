document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Load tasks from local storage on page load
    loadTasks();

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default form submission
        addTask(taskInput.value);
        taskInput.value = ''; // Clear the input field
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'SPAN') {
            toggleTaskCompletion(e.target.parentElement);
        } else if (e.target.tagName === 'BUTTON') {
            deleteTask(e.target.parentElement);
        }
    });

    function addTask(taskText) {
        if (taskText.trim() === '') {
            alert('Please enter a task!');
            return;
        }

        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);

        

        taskList.appendChild(li);
        saveTasks(); // Save tasks to local storage
    }

    function toggleTaskCompletion(taskItem) {
        taskItem.classList.toggle('completed');
        saveTasks();
    }

    function deleteTask(taskItem) {
        taskList.removeChild(taskItem);
        saveTasks();
    }

    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push({
                text: li.querySelector('span').textContent,
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = task.text;
            li.appendChild(span);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            li.appendChild(deleteButton);

            if (task.completed) {
                li.classList.add('completed');
            }
            taskList.appendChild(li);
        });
    }
});