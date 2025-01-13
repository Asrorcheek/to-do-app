import { Createtask } from "./Createtask";

window.onload = function() {
    document.querySelector('.addTask').addEventListener('click', () => {
        const taskContainer = createTask();
        if (taskContainer) {
            let rightContainer = document.querySelector('.right__container');
            if (rightContainer.children.length > 0 && rightContainer.children[0].classList.contains('empty__list')) {
                rightContainer.children[0].remove();
            }
            addTaskToList(taskContainer);
            clearValueOfInput();
        }
    });


    document.addEventListener('click', (event) => {
        if(event.target.className === "close__btn"){
            const parent = event.target.parentElement;
            if(parent.parentElement.children.length === 1){
                parent.remove();
                CreateEmptyContainerText();
            }else{
                event.target.parentElement.remove();
            }
        }
    });
}

const createTask = () => {
    let titleValue = document.querySelector('.task_title').value;
    let descriptionValue = document.querySelector('.task_description').value;

    if(titleValue && descriptionValue){
        let close_button = document.createElement('span');
        close_button.className = "close__btn";
        let taskId = 0;
        let title = document.createElement('h3');
            title.className = 'title';
            title.innerHTML = titleValue;

        let description = document.createElement('p');
            description.className = 'description';
            description.innerHTML = descriptionValue;

        let taskContainer = document.createElement('div');
        taskContainer.className = 'task__container';
        taskContainer.prepend(title, close_button, description);

        return taskContainer;
    } else {
        alert(`Ma'lumotlar to'ldiring !`);
        return null;
    }
}
const addTaskToList = (taskContainer) => {
    document.querySelector('.right__container').prepend(taskContainer);
}
const clearValueOfInput = () => {
    document.querySelector('.task_title').value = "";
    document.querySelector('.task_description').value = "";
}
const CreateEmptyContainerText = () => {
    let empty = document.createElement('span');
    empty.className = 'empty__list';
    empty.innerHTML = 'Add some Tasks for yourself';
    let rightContainer = document.querySelector('.right__container');
    console.log(`CreateEmptyContainerText funksiyani ichidan log ${empty}`);
    rightContainer.prepend(empty);
    
}
