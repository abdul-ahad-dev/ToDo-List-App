// todo list javascript

// get add task button
var addTaskButton = document.getElementById('add-task');
var taskTable = document.getElementById('task-table');
var todoTaskInput = document.getElementById('todo-task');


var taskList = [];


function addTask()
{
    // Get todo task
    let todoTask = todoTaskInput.value.trim();

    // Check if task is not empty
    if (todoTask !== '') {
        // Add task to list
        taskList.push({
            id: taskList.length + 1,
            task: todoTask,
            status: 'In Progress'
        });

        // Update task table
        updateTaskTable();

        // Clear input field
        todoTaskInput.value = '';
    }
}

// Function to update task table
function updateTaskTable()
{
    var taskBody = document.getElementById('task-body');
    taskBody.innerHTML = '';
    taskList.forEach((task, index) =>
    {
        taskBody.innerHTML += `
        <tr class="table-item" id="table-item-${task.id}">
          <td class="item-no">${task.id}</td>
          <td class="item">${task.task}</td>
          <td class="item-status">${task.status}</td>
          <td class="item-btns">
            <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
          </td>
        </tr>
      `;
    });
}

// Function to delete task
function deleteTask(id)
{
    taskList = taskList.filter(task => task.id!== id);

    // Re-index the remaining tasks
    taskList.forEach((task, index) => {
        task.id = index + 1;
    });

    updateTaskTable();
}

// Function to edit task
function editTask(id)
{
    let task = taskList.find(task => task.id === id);
    if (task) {
        let newTask = prompt('Edit task:', task.task);
        if (newTask !== null) {
            task.task = newTask;
            updateTaskTable();
        }
    }
}

// Add event listener to add task button
addTaskButton.addEventListener('click', addTask)