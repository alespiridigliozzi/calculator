# JavaScript Calculator :iphone:
[Check out the Live Demo Here](https://alessandrothedev.github.io/calculator/)

![js-calculator](https://github.com/alexsp92/calculator/blob/main/js-calculator.png)

## The Design :large_blue_diamond:
The Calculator was designed with a **mobile-first approach**, using a _css-grid_ layout and styled using the _Glass Morphism_ design trend.

## The Logic :large_orange_diamond:
The calculator consists of:
- _A display section_ where users will be able to see the operations and their result
- _7 Operators:_ Addition, Subtraction, Multiplication, Division, Percentage, Square root & Power of
- _Numbers_ from 0 to 9
- _4 Additional buttons:_ 
    - _Equal_ button that will return the result of the operation
    - _Delete_ button to allow user to delete one or multiple digits
    - _Dot (.) button_ to allow user to use decimal units
    - _C_ button to activate the function All Clear and allow user to reset the calculator

## The Code :white_square_button:
The values of the users' inputs (when they click on a button for each single digit) will be stored in two variables with empty arrays.
`let firstOperand = [];` and `let secondOperand = [];`

A 3rd variable, will take a value of *true*.
`let isFirstOperandFilled = true;`

An undefined variable for the operators.
`let operator;`

### Getting the Values:
An EventListener, followed by an `if statement` function was set up, so that the values of the buttons will be pushed into the first variable array, using `array.push()` until the user selects one of the 7 operators. Once a user has selected an operator, the variable `isFirstOperandFilled` will be set to `false`, causing every other value from the following buttons' inputs to be pushed into our second array variable. 

### Deleting the Values:
To delete values, we simply reverse the logic used to originally get the values. This time, we are deleting items from the array so we will use `array.pop()` to delete the last value inserted into the array.

### Calculation
`switch` cases will evaluate different scenarios and based on that, different mathematical operations will be performed:
```javascript
switch (operandCheck) {
       case operandCheck && operator.includes('+'):
            result = +firstOperand + +secondOperand;
            display.innerHTML += ` =  <span class="final-result">${result}</span> `;
            break;
       case operandCheck && operator.includes('-'):
            result = +firstOperand - +secondOperand;
            display.innerHTML += ` =  <span class="final-result">${result}</span> `;
            break;
       [...]
}
```
