// project constructor
class Project {
    constructor(name) {
        this.name = name;
    }
}

class Task {
    constructor(objective, date) {
        this.objective = objective;
        this.date = date;
    }
}
//
// all naming project inputs
const nameProject = document.querySelector('.nameProject');
const nameInput = document.querySelector('.input');
const nameCancel = document.querySelector('.nameCancel');
const userInput = document.querySelector('.userInput');
const nameAdd = document.querySelector('.nameAdd');
const projectList = document.querySelector('.projectList');
const projectTitle = document.querySelector('.projectTitle');
const allTasks = document.querySelector('.allTasks');

nameProject.addEventListener('click', () => {
    nameInput.style.display = 'inline';
})

nameCancel.addEventListener('click', () => {
    nameInput.style.display = 'none';
})

nameAdd.addEventListener('click', () => {
    const thisProject = new Project(userInput.value);
    const newListing = document.createElement('li');
    newListing.innerHTML = thisProject.name;
    const newListingDiv = document.createElement('div');
    const addNewTask = document.createElement('button');
    const addTaskForm = document.createElement('form');
    const addTaskInput = document.createElement('input');
    addTaskInput.classList.add('taskInput');
    const taskFormCancel = document.createElement('button');
    taskFormCancel.innerHTML = 'Cancel';
    taskFormCancel.classList.add('btn');
    taskFormCancel.classList.add('btn-danger');
    taskFormCancel.type = 'button';
    taskFormCancel.addEventListener('click', () => {
        addTaskForm.style.display = 'none';
        addNewTask.style.display = 'inline';
    })

    const taskList = [];

    const taskContainer = document.createElement('div');



    const taskFormSubmit = document.createElement('button');
    taskFormSubmit.classList.add('btn');
    taskFormSubmit.classList.add('btn-success');
    taskFormSubmit.type = 'button';
    taskFormSubmit.innerHTML = 'Submit';
    taskFormSubmit.addEventListener('click', () => {
        taskContainer.innerHTML = '';

        const newTask = new Task(addTaskInput.value, 'hello');
        taskList.push(newTask);
        for (let i = 0; i <= taskList.length - 1; i++) {
            const taskDiv = document.createElement('div');
            const removeTaskDiv = document.createElement('button');
            removeTaskDiv.type = 'button';
            removeTaskDiv.innerHTML = 'Delete'
            removeTaskDiv.classList.add('btn');
            removeTaskDiv.classList.add('btn-danger');
            removeTaskDiv.addEventListener('click', () => {
                taskDiv.remove();
                taskList.splice(i, 1);
            })

            taskDiv.innerHTML = taskList[i].objective;
            taskDiv.appendChild(removeTaskDiv);
            taskContainer.appendChild(taskDiv);
        }
        addTaskForm.style.display = 'none';
        addNewTask.style.display = 'inline';
        addTaskInput.value = '';

        newListingDiv.appendChild(taskContainer);
    })


    addTaskForm.appendChild(addTaskInput);
    addTaskInput.placeholder = 'What is the task?';
    addTaskForm.style.display = 'none';
    addTaskForm.appendChild(taskFormCancel);
    addTaskForm.appendChild(taskFormSubmit);
    newListingDiv.appendChild(addNewTask);
    newListingDiv.appendChild(addTaskForm);








    addNewTask.innerHTML = 'Add task';
    addNewTask.addEventListener('click', () => {
        addTaskForm.style.display = 'inline';
        addNewTask.style.display = 'none';

    })



    newListing.addEventListener('click', () => {

        projectTitle.innerHTML = thisProject.name;
        allTasks.innerHTML = '';
        allTasks.appendChild(newListingDiv);

    })
    projectList.appendChild(newListing);
    userInput.value = '';
    nameInput.style.display = 'none';
})

