let timerInterval;
let totalTime = 10 * 60;

function startTimer() {
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');
  const millisecondsElement = document.getElementById('milliseconds');

  timerInterval = setInterval(() => {
    if (totalTime <= 0) {
      clearInterval(timerInterval);
      totalTime = 10 * 60;
      startTimer();
      return;
    }

    totalTime--;

    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    const milliseconds = 0;

    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
    millisecondsElement.textContent = String(milliseconds).padStart(2, '0');
  }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  startTimer();
});