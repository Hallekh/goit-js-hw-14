let counterValue = 0;
const valueSpan = document.getElementById("value");

document.getElementById("counter").addEventListener("click", (event) => {
  const action = event.target.dataset.action;

  if (action === "increment") {
    counterValue += 1;
  } else if (action === "decrement") {
    counterValue -= 1;
  }

  valueSpan.textContent = counterValue;
});
