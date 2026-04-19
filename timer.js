let timerInterval;
let totalSeconds = 0;
let isPaused = true;

const display = document.getElementById('display');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');

// Helper to format numbers (adds a leading zero if < 10)
const formatTime = (num) => String(num).padStart(2, '0');

function updateDisplay() {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    display.innerText = `${formatTime(hrs)}:${formatTime(mins)}:${formatTime(secs)}`;
}

function startTimer() {
    // If we're starting fresh, get values from inputs
    if (totalSeconds === 0) {
        const h = parseInt(document.getElementById('hours').value) || 0;
        const m = parseInt(document.getElementById('minutes').value) || 0;
        const s = parseInt(document.getElementById('seconds').value) || 0;
        totalSeconds = (h * 3600) + (m * 60) + s;
    }

    if (totalSeconds <= 0) return alert("Please set a time first!");

    isPaused = false;
    startPauseBtn.innerText = "Pause";
    startPauseBtn.style.backgroundColor = "#e67e22"; // Switch to orange

    timerInterval = setInterval(() => {
        totalSeconds--;
        updateDisplay();

        if (totalSeconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            resetTimer();
        }
    }, 1000);
}

function pauseTimer() {
    isPaused = true;
    clearInterval(timerInterval);
    startPauseBtn.innerText = "Resume";
    startPauseBtn.style.backgroundColor = "#27ae60";
}

function resetTimer() {
    clearInterval(timerInterval);
    isPaused = true;
    totalSeconds = 0;
    updateDisplay();
    startPauseBtn.innerText = "Start";
    startPauseBtn.style.backgroundColor = "#27ae60";
    // Clear inputs
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}

startPauseBtn.addEventListener('click', () => {
    if (isPaused) {
        startTimer();
    } else {
        pauseTimer();
    }
});

resetBtn.addEventListener('click', resetTimer);