let counter = 0;
const counterDisplay = document.getElementById("counter");
document.getElementById("increment").addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;
});
document.getElementById("decrement").addEventListener("click", () => {
    counter--;
    counterDisplay.textContent = counter;
});