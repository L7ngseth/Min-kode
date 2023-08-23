var startTime = 0,
    intervalId,
    isRunning = false,
    lapTimes = [],
    stopwatch = document.getElementById('stopwatch'),
    startStopButton = document.getElementById('startStopButton'),
    resetButton = document.getElementById('resetButton'),
    recordButton = document.getElementById('recordButton'),
    lapTimesList = document.getElementById('lapTimes');
  
function formatTime(ms) {
  return new Date(ms).toISOString().substr(11, 8);
}

function updateStopwatch() {
  stopwatch.textContent = formatTime(Date.now() - startTime);
}

function toggleStartStop() {
  if (isRunning) {
    clearInterval(intervalId);
    startStopButton.textContent = 'Start';
    recordButton.disabled = true;
  } else {
    startTime = Date.now() - (startTime ? startTime - Date.now() : 0);
    intervalId = setInterval(updateStopwatch, 10);
    startStopButton.textContent = 'Stopp';
    recordButton.disabled = false;
  }
  isRunning = !isRunning;
}

function resetStopwatch() {
  clearInterval(intervalId);
  stopwatch.textContent = '00:00:00';
  isRunning = false;
  startStopButton.textContent = 'Start';
  recordButton.disabled = true;
  lapTimes = [];
  lapTimesList.innerHTML = '';
}

function recordLapTime() {
  if (isRunning) {
    lapTimes.push(Date.now() - startTime);
    var lapItem = document.createElement('li');
    lapItem.textContent = 'Runde ' + lapTimes.length + ': ' + formatTime(lapTimes[lapTimes.length-1]);
    lapTimesList.appendChild(lapItem);
    startTime = Date.now();
  }
}

startStopButton.addEventListener('click', toggleStartStop);
resetButton.addEventListener('click', resetStopwatch);
recordButton.addEventListener('click', recordLapTime);
