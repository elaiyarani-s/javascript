 let timerInterval;
let minutes = 0;
let seconds = 0;

function startTimer() {
    minutes = 0;
    seconds = 0;
    stopwatch();

    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").disabled = false;

    timerInterval = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        stopwatch();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);

    document.getElementById("startBtn").disabled = false;
    document.getElementById("stopBtn").disabled = true;
}

function stopwatch() {
    const formattedTime = formatTime(minutes) + ":" + formatTime(seconds);
    document.getElementById("time").textContent = formattedTime;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

window.onload = function() {
    stopwatch();
}