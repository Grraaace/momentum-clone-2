const loginForm = document.querySelector(".login-form");
const loginWriteNameInput = document.querySelector(".login-form input:first-child");
const greeting = document.querySelector(".greeting");
const todoForm = document.querySelector(".todo-form");
const HIDDEN_CLASSNAME = "hidden";


function paintGreeting(name){
    greeting.innerText = `안녕하세요 ${name}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoForm.classList.remove(HIDDEN_CLASSNAME);
}

function removeLogin(){
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

function handleLogin(event){
    event.preventDefault();
    const usernameJustTyped = loginWriteNameInput.value;
    localStorage.setItem("username", usernameJustTyped);
    const username = localStorage.getItem("username");
    paintGreeting(username);
    removeLogin();
}

const SavedUsername = localStorage.getItem("username");

if(SavedUsername === null){
    loginForm.addEventListener("submit", handleLogin);
} else{
    paintGreeting(SavedUsername);
    removeLogin();
}
