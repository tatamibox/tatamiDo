// project constructor
class Project {
    constructor(name) {
        this.name = name;
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
    projectList.appendChild(newListing);
    userInput.value = '';
    nameInput.style.display = 'none';
})

