const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
//Event Listener

todoButton.addEventListener('click', addtodo);
todoList.addEventListener('click', deletecheck);
//Function
function addtodo(event) {
    event.preventDefault();
    //Create DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Create LI
    const newtodo = document.createElement('li');
    //    newtodo.innerText='hey';
    newtodo.innerText = todoInput.value;
    newtodo.classList.add('todo-item');
    todoDiv.appendChild(newtodo);

    // Create Check Mark Button
    const completedButton = document.createElement('button');
    //    completedButton.innerHTML=' <i class="fa fa-check-circle" aria-hidden="true"></i>'
    completedButton.innerHTML = ' <i class="fa fa-check-circle"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    // Create Trash(Delete) Mark Button
    const trashButton = document.createElement('button');
    //    trashButton.innerHTML=' <i class="fa fa-trash" aria-hidden="true"></i>'
    trashButton.innerHTML = ' <i class="fa fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //Clear Todo input value
    todoInput.value = "";


}

function deletecheck(e) {
    const item = e.target;

    //Delete todo
    if (item.classList[0] === "trash-btn");
    {
        const todo = item.parentElement;
        todo.remove();
    }


    //Check Mark
    if (item.classList[0] === "complete-btn");
    {
        const todo = item.parentElement;
        todo.classList.add("completed");
    }


}

