// script.js
function playAudio(audioFileName) {
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");
    
    audioSource.src = audioFileName;
    audioPlayer.load();
    audioPlayer.play();
  }
  