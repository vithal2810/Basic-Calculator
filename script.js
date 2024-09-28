let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let clearButton = document.getElementById('clear');
let equalsButton = document.getElementById('equals');

let currentInput = ''; // The string that shows on the display
let operator = '';     // The current operator (+, -, *, /)
let firstValue = '';   // The first number input by the user

// Handle button clicks
buttons.forEach(button => {
    button.addEventListener('click', function() {
        let value = this.getAttribute('data-value');

        if (value === '.') {
            if (!currentInput.includes('.')) {
                currentInput += value;
            }
        } else if (!isNaN(value)) {
            currentInput += value;
        }

        display.textContent = currentInput;
    });
});

// Handle operator buttons (+, -, *, /)
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', function() {
        if (currentInput !== '') {
            firstValue = currentInput;
            operator = this.getAttribute('data-value');
            currentInput = '';
            display.textContent = '0';
        }
    });
});

// Handle equals button
equalsButton.addEventListener('click', function() {
    if (firstValue && currentInput && operator) {
        let result;
        let secondValue = currentInput;

        switch (operator) {
            case '+':
                result = parseFloat(firstValue) + parseFloat(secondValue);
                break;
            case '-':
                result = parseFloat(firstValue) - parseFloat(secondValue);
                break;
            case '*':
                result = parseFloat(firstValue) * parseFloat(secondValue);
                break;
            case '/':
                result = parseFloat(firstValue) / parseFloat(secondValue);
                break;
        }

        display.textContent = result;
        currentInput = result.toString();
        firstValue = '';
        operator = '';
    }
});

// Handle clear button
clearButton.addEventListener('click', function() {
    currentInput = '';
    firstValue = '';
    operator = '';
    display.textContent = '0';
    display.textContent = '00';
});
