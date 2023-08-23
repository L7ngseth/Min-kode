const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");
const countElement = document.getElementById("count");

let count = 0;

function updateCount() {
  countElement.textContent = count;
}

function changeCount(diff) {
  count += diff;
  updateCount();
}

decreaseButton.addEventListener("click", () => {
  if (count > 0) {
    changeCount(-1);
  }
});

increaseButton.addEventListener("click", () => {
  changeCount(1);
});

updateCount();