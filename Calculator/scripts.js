let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    updateDisplay();
}

function calculate() {
    try {
        currentInput = eval(currentInput);
    } catch (e) {
        currentInput = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentInput;
}