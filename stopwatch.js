let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("display").innerText = `${h}:${m}:${s}`;
}

function run() {
  seconds++;

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  updateDisplay();
}

function start() {
  if (timer !== null) return; // elak double start
  timer = setInterval(run, 1000);
}

function pause() {
  clearInterval(timer);
  timer = null;
}

function reset() {
  pause();
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}