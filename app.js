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

nameProject.addEventListener('click', () => {
    nameInput.style.display = 'inline';
})

nameCancel.addEventListener('click', () => {
    nameInput.style.display = 'none';
})