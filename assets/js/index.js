const btnAdd = document.querySelector('[data-task-add]')
const taskList = document.querySelector('.app__list');
const taskInput = document.querySelector('[data-task-input]')
const clearBoardBtn = document.querySelector('#clear-btn');

btnAdd.addEventListener('click', addTask) 
taskList.addEventListener('click', deleteTask)
taskList.addEventListener('click', checkTask)
clearBoardBtn.addEventListener('click', clearBoard)



function addTask () {
    let inputTaskValue = taskInput.value;
    let lenTaskList = taskList.children.length + 1;
    let taskId = lenTaskList;

    const taskTemplate = `
            <li class="app__task task-app">
            <span class="task-app__id">#${taskId}</span>
            <span class="task-app__text">${inputTaskValue}</span>
            <div class="task-app__buttons">
                <button class="task__btn task__complite">
                    <svg class="task__check" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="circle" d="M8.66666 13.5417L11.9167 16.7917L17.3333 10.2917" stroke="#929090" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path class="check" d="M13 23.8333C18.9831 23.8333 23.8333 18.9831 23.8333 13C23.8333 7.01692 18.9831 2.16667 13 2.16667C7.0169 2.16667 2.16666 7.01692 2.16666 13C2.16666 18.9831 7.0169 23.8333 13 23.8333Z" stroke="#929090" stroke-width="2"/>
                    </svg>
                    </button>
                <button class="task__btn task__delete"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6667 6.125V6.41667H16.3333V6.125C16.3333 5.50616 16.0875 4.91267 15.6499 4.47508C15.2123 4.0375 14.6188 3.79167 14 3.79167C13.3812 3.79167 12.7877 4.0375 12.3501 4.47508C11.9125 4.91267 11.6667 5.50616 11.6667 6.125V6.125ZM10.2083 6.41667V6.125C10.2083 5.11939 10.6078 4.15496 11.3189 3.44389C12.03 2.73281 12.9944 2.33333 14 2.33333C15.0056 2.33333 15.97 2.73281 16.6811 3.44389C17.3922 4.15496 17.7917 5.11939 17.7917 6.125V6.41667H24.3542C24.5475 6.41667 24.733 6.49349 24.8698 6.63023C25.0065 6.76698 25.0833 6.95245 25.0833 7.14583C25.0833 7.33922 25.0065 7.52469 24.8698 7.66143C24.733 7.79818 24.5475 7.875 24.3542 7.875H22.6526L21.4859 21.791C21.3973 22.8478 20.9148 23.8327 20.1342 24.5505C19.3536 25.2684 18.3318 25.6667 17.2713 25.6667H10.7287C9.66827 25.6666 8.64661 25.2681 7.86612 24.5503C7.08564 23.8325 6.60329 22.8477 6.51466 21.791L5.34799 7.875H3.64582C3.45244 7.875 3.26697 7.79818 3.13022 7.66143C2.99348 7.52469 2.91666 7.33922 2.91666 7.14583C2.91666 6.95245 2.99348 6.76698 3.13022 6.63023C3.26697 6.49349 3.45244 6.41667 3.64582 6.41667H10.2083ZM7.96774 21.6691C8.02581 22.3614 8.34183 23.0066 8.85319 23.4769C9.36454 23.9472 10.0339 24.2083 10.7287 24.2083H17.2713C17.9662 24.2084 18.6357 23.9474 19.1472 23.4771C19.6586 23.0068 19.9747 22.3615 20.0328 21.6691L21.189 7.875H6.81099L7.96774 21.6691V21.6691ZM12.5417 11.8125C12.5417 11.7167 12.5228 11.6219 12.4862 11.5335C12.4495 11.445 12.3958 11.3646 12.3281 11.2969C12.2604 11.2292 12.18 11.1755 12.0915 11.1388C12.0031 11.1022 11.9082 11.0833 11.8125 11.0833C11.7167 11.0833 11.6219 11.1022 11.5334 11.1388C11.445 11.1755 11.3646 11.2292 11.2969 11.2969C11.2292 11.3646 11.1755 11.445 11.1388 11.5335C11.1022 11.6219 11.0833 11.7167 11.0833 11.8125V20.2708C11.0833 20.3666 11.1022 20.4614 11.1388 20.5499C11.1755 20.6383 11.2292 20.7187 11.2969 20.7864C11.3646 20.8541 11.445 20.9079 11.5334 20.9445C11.6219 20.9811 11.7167 21 11.8125 21C11.9082 21 12.0031 20.9811 12.0915 20.9445C12.18 20.9079 12.2604 20.8541 12.3281 20.7864C12.3958 20.7187 12.4495 20.6383 12.4862 20.5499C12.5228 20.4614 12.5417 20.3666 12.5417 20.2708V11.8125ZM16.1875 11.0833C16.59 11.0833 16.9167 11.41 16.9167 11.8125V20.2708C16.9167 20.4642 16.8398 20.6497 16.7031 20.7864C16.5663 20.9232 16.3809 21 16.1875 21C15.9941 21 15.8086 20.9232 15.6719 20.7864C15.5351 20.6497 15.4583 20.4642 15.4583 20.2708V11.8125C15.4583 11.41 15.785 11.0833 16.1875 11.0833Z" fill="#929090"/>
                    </svg></button>
            </div>    
        </li>
         `

    if(inputTaskValue == ''){
        taskInput.style.border = '1px solid red'
    } else {
        taskInput.style.border = 'none'
        taskList.insertAdjacentHTML('beforeend', taskTemplate);
    }   

    taskInput.value = '';
    taskInput.focus();
    savetoLS();
}


function deleteTask (event) {
    if(event.target.closest('.task__delete')) {
        const taskItem = event.target.closest('.task-app');
        taskItem.remove();
    }
}

function checkTask (event) {

    if (event.target.closest('.task__complite')) {
        let itemTask = event.target.closest('.task-app')
            itemTask.classList.add('complite')
    }
}

function clearBoard () {

}

