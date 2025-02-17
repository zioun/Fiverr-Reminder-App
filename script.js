const timerElement = document.getElementById("timer");
const music = document.getElementById("music");

let totalTime = 4 * 60;
let timerInterval = null;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

function playMusic() {
    music.play().catch((error) => {
        console.error("Music playback error:", error);
    });
}

function startTimer() {
    timerInterval = setInterval(() => {
        if (totalTime > 0) {
            totalTime--;
            timerElement.textContent = formatTime(totalTime);
        } else {
            playMusic();
            totalTime = 5 * 60;
        }
    }, 10);
}

startTimer();
