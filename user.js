const user_container = document.querySelector(".user");
const user_input = user_container.querySelector("input");
const user_view = user_container.querySelector(".js-userView");

const USER_LS = "user";
const SHOW = "showing";
const HIDE = "hiding";

function saveUser(text) {
  localStorage.setItem(USER_LS, text);
}

function greetingHandle(event) {
  event.preventDefault();
  const inputUser = user_input.value;
  saveUser(inputUser);
  printUser(inputUser);
}

function askName() {
  user_input.classList.add(SHOW);
  user_input.classList.remove(HIDE);
  user_view.classList.remove(SHOW);
  user_view.classList.add(HIDE);
  user_container.addEventListener("submit", greetingHandle);
}

function printUser(text) {
  user_input.classList.remove(SHOW);
  user_input.classList.add(HIDE);
  user_view.classList.add(SHOW);
  user_view.classList.remove(HIDE);
  user_view.innerHTML = `Hello! ${text}`;
}

function loadUser() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askName();
  } else {
    printUser(currentUser);
  }
}

function init() {
  loadUser();
}

init();
