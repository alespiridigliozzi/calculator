// select the display 
const display = document.querySelector('#display');

// get the value from each button, display it and add a click event to each one of them.

let number1;
let number2;
let operator;

const getValues = () => {
    const numValue = document.querySelectorAll('.number');

    numValue.forEach(number => {
        number.addEventListener('click', () => {
            if(typeof number1 === 'undefined') {
                number1 = number.value;
                display.innerHTML += ` ${number.value}  `;
                console.log(number1);
            } else if (typeof number1 !== 'undefined' && typeof number2 === 'undefined') {
                number2 = number.value;
                display.innerHTML += ` ${number.value}  `;
                console.log(number2)
            }
        })
    });

    const getOperators = () => {
        const operatorValue = document.querySelectorAll('.operator');
    
        operatorValue.forEach(operatorBtn => {
            operatorBtn.addEventListener('click', () => {
                if(typeof operator === 'undefined') {
                    operator = operatorBtn.value;
                    display.innerHTML += `  <b>${operatorBtn.value}</b>  `;
                    console.log(operator);
                }
            })
        })
    }
    
    getOperators();

    const calculation = () => {
        const equal = document.querySelector('.equal')

        equal.addEventListener('click', () => {
            if(typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('+')) {
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


// reset button will clear the display from the inputs and reset the variables to undefined;

const clearAll = () => {
    const reset = document.getElementById('reset').addEventListener('click', () => {
        number1 = undefined;
        number2 = undefined;
        operator = undefined;
        display.innerHTML = "";
    })
}

clearAll();