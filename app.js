// select the display div where the numbers and result will be displayed.
const display = document.querySelector('#display');

// get the value from each button, display it and add a click event to each one of them.

let number1 = []; // Initialize the array
let number2 = []; // Initialize the array
let isNumber1Filled = true;  // Boolean value to know which number array is being filled with values. This will push values into number1 array based on this value. It will be set to false once you press an operator, and numbers after the operator will be pushed into number2 array;
let operator;

const getValues = () => {
  const numValue = document.querySelectorAll('.number');

    numValue.forEach(number => {
        number.addEventListener('click', () => {
            if (isNumber1Filled) { // If true, number values will be pushed into array number1;
                number1.push(number.value)
                display.innerHTML += `${number.value}`;
                console.log(number1);
            } else {
                number2.push(number.value) // Else, they will be pushed in array number2;
                display.innerHTML += `${number.value}`;
                console.log(number2)
            }
        })
    });

    const deleteButton = document.querySelector('.delete');

    const deleteUserInput = () => {
    
        deleteButton.addEventListener('click', () => {
            if (isNumber1Filled) {
                number1.pop(); // same logic of numValue.forEach() that pushes values into the arrays. But this time, we are deleting items from the array if user pressed the delete button
                display.innerText = display.innerText.slice(0, -1)
                console.log(number1);
            } else {
                number2.pop();
                display.innerText = display.innerText.slice(0, -1)
                console.log(number2);
            }
        })
    }
    
    deleteUserInput();

    const getOperators = () => {
        const operatorValue = document.querySelectorAll('.operator');

        operatorValue.forEach(operatorBtn => {
            operatorBtn.addEventListener('click', () => {
                if (typeof operator === 'undefined') {
                    isNumber1Filled = false;  // Making isFillingNumber1 false so values will be put into array number2
                    operator = operatorBtn.value;
                    display.innerHTML += `<span class="display-operator">${operatorBtn.value}</span>`;
                    console.log(operator);
                }
            })
        })
    }

  getOperators();

  const calculation = () => {
        const equal = document.querySelector('.equal')
        let result;

        equal.addEventListener('click', () => {
            number1 = number1.join("");// Joining the array to make a string.
            number2 = number2.join("");

            // switch(equal) {
            //     case typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('+'):
            //         console.log(+number1 + +number2)
            //         result = +number1 + +number2;
            //         display.innerHTML += ` =  <span class="finalresult">${result}</span> `;
            //         return result;
            //     case typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('-'):
            //         console.log(+number1 - +number2)
            //         result += +number1 - +number2;
            //         display.innerHTML += ` =  <span class="finalresult">${result}</span> `;
            //         return result;
            //     case typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('x'):
            //         console.log(+number1 * +number2)
            //         result = +number1 * +number2;
            //         display.innerHTML += ` =  <span class="finalresult">${result}</span> `;
            //         return result;
            //     case typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('÷'):
            //         result = +number1 / +number2;
            //         display.innerHTML += ` =  <span class="finalresult">${result}</span> `;
            //         console.log(+number1 / +number2)
            //         return result;
            //     case typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('*'):
            //         result = Math.pow(+number1, +number2)
            //         display.innerHTML += ` =  <span class="finalresult">${result}</span> `;
            //         console.log(Math.pow(+number1, +number2))
            //         return result;
            // }    

            if (typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('+')) {
                    console.log(+number1 + +number2)
                    result = +number1 + +number2;
                    display.innerHTML += ` =  <span class="finalresult">${result}</span> `;
                    return result;
            } else if (typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('-')) {
                    console.log(+number1 - +number2)
                    result = +number1 - +number2;
                    display.innerHTML += ` =  <span class="finalresult">${result}</span> `;
                    return result;
            } else if (typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('x')) {
                    console.log(+number1 * +number2)
                    result = +number1 * +number2;
                    display.innerHTML += ` =  <span class="finalresult">${result}</span> `;
                    return result;
            } else if (typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('÷')) {
                    result = +number1 / +number2;
                    display.innerHTML += ` =  <span class="finalresult">${result}</span> `;
                    console.log(+number1 / +number2)
                    return result;
            } else if (typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('*')) {
                    result = Math.pow(+number1, +number2)
                    display.innerHTML += ` =  <span class="finalresult">${result}</span> `;
                    console.log(Math.pow(+number1, +number2))
                    return result;
            }
        })
    }
  calculation()
}

getValues();


// When user clicks on the reset button, it will clear the display from the inputs and reset the variables to undefined, so a new calculation can be performed;

const clearAll = () => {
    const reset = document.getElementById('reset').addEventListener('click', () => {
        number1 = [];
        number2 = [];
        isNumber1Filled = true;
        operator = undefined;
        display.innerHTML = "";
    })
}

clearAll();