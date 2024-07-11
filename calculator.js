function add(a,b) {
    return a+b
}

function subtract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b) {
    return a/b
}

function operate(operator, a, b) {
    let val = 0
    console.log(`${a}${operator}${b}`)
    switch (operator.toLowerCase()) {
        case '+':
            val = add(a,b);
            break;
        case '-':
            val = subtract(a,b);
            break;
        case '*':
            val = multiply(a,b);
            break;
        case '/':
            val = divide(a,b);
            break;
        case 'AC':
            val = 0;
            break;
        case '=':
    }
    console.log(`${a}${operator}${b}=${val}`)
    return val
}

function clearDisplay() {
    display.textContent = '';
}

function appendToDisplay(val) {
    display.textContent += val.toString();
}

const container = document.querySelector('.container');
const display = document.querySelector('.display');
const numKeys = document.querySelectorAll('.number')
const operatorKeys = document.querySelectorAll('.operator')
const equalsKey = document.querySelector('.equals')
let firstNumber = 0;
let operator = null;
let secondNumber = null;

numKeys.forEach((key) => {
   key.addEventListener('click',() => {
        appendToDisplay(key.textContent)    
        if (secondNumber === null) {
            firstNumber = display.textContent
        } 
        else {
            
        }
        console.log(key.textContent)
   }) 
})

operatorKeys.forEach((key) => {
    key.addEventListener('click',() => {
        console.log(key.textContent);
        if (firstNumber === null) return
        if (secondNumber === null) firstNumber
        if (operator === null) {
            operator = key.textContent;
            firstNumber = parseInt(display.textContent)
        }
        else {
            secondNumber = parseInt(display.textContent);
            firstNumber = operate(key.textContent, parseInt(firstNumber), parseInt(secondNumber))
            console.log('got ' +firstNumber);
            secondNumber = 0;
            display.textContent = firstNumber;
            operator = null;
        }
    })
})
