let firstOperand = [];
let secondOperand = [];
let isFirstOperandFilled = true;
let operator;
let result;

const display = document.querySelector("#display");
const numberValues = document.querySelectorAll(".number");
const deleteButton = document.querySelector(".delete");
const operatorValue = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const reset = document.getElementById("reset");

// Getting the values from the buttons and storing them into arrays;
const getValues = () => {
  numberValues.forEach(number => {
    number.addEventListener("click", () => {
      console.log(display.innerText);
      if (isFirstOperandFilled) {
        firstOperand.push(number.value);
        display.innerHTML += `${number.value}`;
      } else {
        secondOperand.push(number.value);
        display.innerHTML += `${number.value}`;
      }
    });
  });
};
getValues();

// Deleting values from the arrays;
const deleteUserInput = () => {
  deleteButton.addEventListener("click", () => {
    if (isFirstOperandFilled) {
      firstOperand.pop();
      display.innerText = display.innerText.slice(0, -1);
    } else {
      secondOperand.pop();
      display.innerText = display.innerText.slice(0, -1);
    }
  });
};
deleteUserInput();

// Get the values from the operators' buttons;
const getOperatorsValues = () => {
  operatorValue.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", () => {
      if (typeof operator === "undefined") {
        isFirstOperandFilled = false;
        operator = operatorBtn.value;
        display.innerHTML += `<span class="display-operator">${operatorBtn.value}</span>`;
      }
    });
  });
};
getOperatorsValues();

// Getting the result of a math operation;
const calculation = () => {
  equal.addEventListener("click", () => {
    firstOperand = firstOperand.join("");
    secondOperand = secondOperand.join("");

    let operandCheck = typeof firstOperand !== "undefined" && typeof secondOperand !== "undefined";

    switch (operandCheck) {
      case operandCheck && operator.includes("+"):
        result = +firstOperand + +secondOperand;
        display.innerHTML += ` =  <span class="final-result">${result}</span> `;
        break;
      case operandCheck && operator.includes("-"):
        result = +firstOperand - +secondOperand;
        display.innerHTML += ` =  <span class="final-result">${result}</span> `;
        break;
      case operandCheck && operator.includes("x"):
        result = +firstOperand * +secondOperand;
        display.innerHTML += ` =  <span class="final-result">${result}</span> `;
        break;
      case operandCheck && operator.includes("÷"):
        result = +firstOperand / +secondOperand;
        display.innerHTML += ` =  <span class="final-result">${result}</span> `;
        break;
      case operandCheck && operator.includes("*"):
        result = Math.pow(+firstOperand, +secondOperand);
        display.innerHTML += ` =  <span class="final-result">${result}</span> `;
        break;
      case operandCheck && operator.includes("%"):
        result = (+firstOperand / 100) * +secondOperand;
        display.innerHTML += ` =  <span class="final-result">${result}</span> `;
        break;
      case operandCheck && operator.includes("√"):
        result = Math.sqrt(+firstOperand);
        display.innerHTML += ` =  <span class="final-result">${result}</span> `;
        break;
    }
  });
};
calculation();

// Resetting the calculator;
const clearAll = () => {
  reset.addEventListener("click", () => {
    firstOperand = [];
    secondOperand = [];
    isFirstOperandFilled = true;
    operator = undefined;
    display.innerHTML = "";
  });
};
clearAll();
