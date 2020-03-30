const todos_container = document.querySelector(".toDos");
const todo_input = todos_container.querySelector("input");
const todo_list = document.querySelector(".js-toDos");

const TODOS_LS = "todos";
let TODOS = [];

function delToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  todo_list.removeChild(li);
  const currentId = li.id;
  const tempObj = TODOS.filter(function(toDo) {
    return toDo.id !== currentId;
  });
  TODOS = tempObj;
  saveToDos(TODOS);
}

function saveToDos(obj) {
  localStorage.setItem(TODOS_LS, JSON.stringify(obj));
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
  delbtn.addEventListener("click", delToDo);
  const newId = Date.now() + (Math.random() * 100000).toFixed();

  span.innerText = text;
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
