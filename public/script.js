// setting up variables to track the cal state
// this code finds the html element with and ID of display
const display = document.getElementById('display');
// holds whatever number the user is currently typing
let currentInput = '0';
// stores the number the user entered before selecting an operator
let currentOutput = '';
// this stores the chosen math operator
let operation = null;

const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const equalsBtns = document.getElementById('equals');
const clearBtns = document.getElementById('clear');
const deleteBtns = document.getElementById('delete');

// loops through every button inside numberBtns
numberBtns.forEach(button => {
    button.addEventListener('click', () => {
        const num = button.getAttribute('data-number');

        if (currentInput === '0') {
            currentInput = num;
        } else {
            currentInput = currentInput + num;
        }

        display.value = currentInput
    });
});
// Handle clear button
clearBtns.addEventListener('click', function() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    display.value = currentInput;
});
// Handle delete button
deleteBtns.addEventListener('click', function() {
    // Remove last character
    currentInput = currentInput.slice(0, -1);
    
    // If empty, show 0
    if (currentInput === '') {
        currentInput = '0';
    }
    
    display.value = currentInput;
});
// Handle operator buttons (+, -, ×, ÷)
operatorBtns.forEach(button => {
    button.addEventListener('click', function() {
        const op = button.getAttribute('data-operator');
        
        previousInput = currentInput;
        currentInput = '0';
        operation = op;
    });
});
// Handle equals button (the actual calculation)
equalsBtns.addEventListener('click', function() {
    if (operation === null) return;
    
    const num1 = Number(previousInput);
    const num2 = Number(currentInput);
    let result = 0;
    
    if (operation === '+') {
        result = num1 + num2;
    } else if (operation === '-') {
        result = num1 - num2;
    } else if (operation === '*') {
        result = num1 * num2;
    } else if (operation === '/') {
        if (num2 === 0) {
            result = 'Error';
        } else {
            result = num1 / num2;
        }
    }
    
    currentInput = result.toString();
    operation = null;
    previousInput = '';
    display.value = currentInput;
});



