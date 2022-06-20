const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-input");
const toDoList = document.querySelector(".todo-list");
let toDoArr = [];
const TODO_KEYNAME = "todo";

function saveToDoArr(){
    localStorage.setItem(TODO_KEYNAME, JSON.stringify(toDoArr));
}

function deleteToDos(event){
    const liToDelete = event.target.parentElement;
    liToDelete.remove();
    toDoArr = toDoArr.filter((todo) => todo.id !== parseInt(liToDelete.id));
    saveToDoArr();
}

function paintToDos(newToDoObj){
    const li = document.createElement("li");
    li.id = newToDoObj.id;
    toDoList.appendChild(li);
    li.classList.add("todo-li")

    const span = document.createElement("span");
    span.innerText = newToDoObj.text;
    li.appendChild(span);
    span.classList.add("todo-span")

    const button = document.createElement("button");
    button.innerText = "X";
    li.appendChild(button);
    button.classList.add("delete-button");

    button.addEventListener("click", deleteToDos);
}

function handleToDoSubmit(event){
    event.preventDefault();

    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text : newToDo,
        id : Date.now(),
    }
    toDoArr.push(newToDoObj);
    
    saveToDoArr();
    paintToDos(newToDoObj);
    
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDo = localStorage.getItem(TODO_KEYNAME);

if(savedToDo !== null){
    const parsedToDos = JSON.parse(savedToDo);
    parsedToDos.forEach(paintToDos);
    toDoArr = parsedToDos;

}
