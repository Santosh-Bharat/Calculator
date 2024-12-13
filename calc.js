let display = document.getElementById("display");

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if (!['+', '-', '*', '/'].includes(lastChar)) {
    display.innerText += operator;
  }
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1);
  if (display.innerText === "") {
    display.innerText = "0";
  }
}

function resetCalculator() {
  display.innerText = "0";
}

function calculateResult() {
  try {
    const result = eval(display.innerText.replace('x', '*'));
    display.innerText = result;
  } catch (error) {
    display.innerText = "Error";
  }
}
