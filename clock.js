const clock_container = document.querySelector(".js-clock");

function timer() {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  currentTime =
    `${hour < 10 ? `0${hour}` : hour} : ` +
    `${minute < 10 ? `0${minute}` : minute} : ` +
    `${second < 10 ? `0${second}` : second}`;
  clock_container.innerHTML = currentTime;
}

function init() {
  timer();
  setInterval(timer, 1000);
}

init();
