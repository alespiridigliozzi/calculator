# JavaScript Calculator :iphone:

## The Design :large_blue_diamond:
The Calculator was designed with a **mobile-first approach**, using a _css-grid_ layout and styled using a new design trend called _Glass Morphism_.

## The Logic :large_orange_diamond:
The calculator consists of:
- _A display section_ where users will be able to see the operations and their result
- _5 Operators:_ Addition, Subtraction, Multiplication, Division & Power of
- _Numbers_ from 0 to 9
- _4 Additional buttons:_ 
    - _Equal_ button that will return the result of the operation
    - _Delete_ button to allow user to delete one or multiple digits
    - _Dot (.) button_ to allow user to use decimal units
    - _C_ button to activate the function All Clear and allow user to reset the calculator

## The Code :white_square_button:
The values of the users' inputs (when they click on a button for each single digit) will be stored in two variables with empty arrays.
`let number1 = [];` and `let number2 = [];`

A 3rd variable, will take a value of *true*.
`let isNumber1Filled = true;`

An undefined variable for the operators.
`let operator;`

### Getting the Values:
An addEventListener, followed by an _if_ statement function was set up, so that the values of the buttons clicked will be pushed into the 1st variable array, using `array.push()` until the user selects one of the 5 operators. Once a user has clicked/selected an operator, the variable `isNumber1Filled` will be set to `false`, causing every other value from the following buttons' inputs to be pushed into our second array variable `number2`. 

### Deleting the Values:
I followed the same logic of `array.push()` which pushes values into the arrays. But this time, we are deleting items from the array if user presses the delete button, therefore, I used `array.pop()` to delete the last value inserted into the arrays.

### Calculation
A series of `if` statements will evaluate different case scenarios, and based on that, the different mathematical operations will be performed:
```const calculation = () => {
        const equal = document.querySelector('.equal')
        let result;

        equal.addEventListener('click', () => {
            number1 = number1.join(""); // Joining the array to make a string.
            number2 = number2.join("");
  
        if (typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('+')) {
                 result = +number1 + +number2;
                 display.innerHTML += ` =  <span class="finalresult">${result}</span> `;
                 return result;
        } else if (typeof number1 !== 'undefined' && typeof number2 !== 'undefined' && operator.includes('-')) {
                 result = +number1 - +number2;
                 display.innerHTML += ` =  <span class="finalresult">${result}</span> `;
                 return result;
            } else if...
            [...]
