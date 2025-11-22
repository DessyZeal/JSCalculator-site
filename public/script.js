const display = document.getElementById('display');
let currentInput = '0';
let currentOutput = '';
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