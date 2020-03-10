const todos_container = document.querySelector(".toDos");
const todo_input = todos_container.querySelector("input");
const todo_list = document.querySelector(".js-toDos");

const TODOS_LS = "todos";
let TODOS = [];

function saveToDos(obj) {
  localStorage.setItem(TODOS_LS, JSON.stringify(TODOS));
}

function toDoHandle(event) {
  event.preventDefault();
  const currentValue = todo_input.value;
  todo_input.value = "";
  printToDos(currentValue);
}

function printToDos(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delbtn = document.createElement("button");
  span.innerText = text;
  const newId = TODOS.length + 1;
  delbtn.innerHTML = "❌";
  li.appendChild(span);
  li.appendChild(delbtn);
  li.id = newId;
  todo_list.appendChild(li);

  const objToDos = {
    id: newId,
    text: text
  };
  TODOS.push(objToDos);
  saveToDos(TODOS);
}

function loadToDos() {
  const toDos = JSON.parse(localStorage.getItem(TODOS_LS));
  if (toDos !== null) {
    toDos.forEach(function(toDo) {
      printToDos(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  todos_container.addEventListener("submit", toDoHandle);
}

init();
