const bulb = document.getElementById("bulb");
const toggleButton = document.getElementById("toggleButton");
const statusText = document.getElementById("statusText");

let isOn = false;

toggleButton.addEventListener("click", () => {
  isOn = !isOn;
  if (isOn) {
    bulb.classList.add("on");
    statusText.textContent = "Lyspæren er på.";
  } else {
    bulb.classList.remove("on");
    statusText.textContent = "Lyspæren er av.";
  }
});
