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