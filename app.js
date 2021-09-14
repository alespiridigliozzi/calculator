// select the display 
const display = document.querySelector('#display');

// get the value from each button, display it and add a click event to each one of them.

let number1 = []; // Initialize the array
let number2 = []; // Initialize the array
// Keep a boolean value to know which number you are filling. You will push values into number array based on this value. It will be set to false once you press an operator.
let isNumber1Filled = true; 
let operator;

const getValues = () => {
  const numValue = document.querySelectorAll('.number');

    numValue.forEach(number => {
        number.addEventListener('click', () => {
            if (isNumber1Filled) { // Note the modified if/else conditions
                number1.push(number.value)
                display.innerHTML += ` ${number.value}  `;
                console.log(number1);
            } else {
                number2.push(number.value) // pushing value in number2 as well
                display.innerHTML += ` ${number.value}  `;
                console.log(number2)
            }
        })
    });

    const getOperators = () => {
        const operatorValue = document.querySelectorAll('.operator');

        operatorValue.forEach(operatorBtn => {
            operatorBtn.addEventListener('click', () => {
                if (typeof operator === 'undefined') {
                    operator = operatorBtn.value;
                    display.innerHTML += `  <b>${operatorBtn.value}</b>  `;
                    isNumber1Filled = false; // Making isFillingNumber1 false so as to enter in number2
                    console.log(operator);
                }
            })
        })
    }

  getOperators();

  const calculation = () => {
        const equal = document.querySelector('.equal')

        equal.addEventListener('click', () => {
            number1 = number1.join(""); // Joining the array to make a string.
            number2 = number2.join("");
            if (typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('+')) {
                    console.log(+number1 + +number2)
                    let result = +number1 + +number2;
                    display.innerHTML += ` = ${result} `;
                    return result;
            } else if (typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('-')) {
                    console.log(+number1 - +number2)
                    let result = +number1 - +number2;
                    display.innerHTML += ` = ${result} `;
            } else if (typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('x')) {
                    console.log(+number1 * +number2)
                    let result = +number1 * +number2;
                    display.innerHTML += ` = ${result} `;
            } else if (typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('/')) {
                    let result = +number1 / +number2;
                    display.innerHTML += ` = ${result} `;
                    console.log(+number1 / +number2)
            }
        })
    }
  calculation()
}

getValues();


// When user click on the reset button, it will clear the display from the inputs and reset the variables to undefined;

const clearAll = () => {
    const reset = document.getElementById('reset').addEventListener('click', () => {
        number1 = [];
        number2 = [];
        operator = undefined;
        display.innerHTML = "";
    })
}

clearAll();