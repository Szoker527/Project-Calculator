const btnNum = document.querySelectorAll(".number");
const textShow = document.querySelector(".text-show")
const textTop = document.querySelector(".text-save")
const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".subtract");
const btnMul = document.querySelector(".multiply");
const btnDiv = document.querySelector(".divide");
const btnEqual = document.querySelector(".equal");
const operatorShow = document.querySelector(".operators");
let lastAction =  true;
let isEqual = false;
const numbers = {
};

btnNum.forEach(num => num.addEventListener("click", function() {
    if (numbers.operator == "=") {
        textShow.textContent += this.value;
        return
    }
    if (lastAction === false) {
        textShow.textContent  = "";
        lastAction = true;
    }
    else if(isEqual === true) {
        textShow.textContent  = "";
    }
    textShow.textContent += this.value;
}))

btnAdd.addEventListener("click", operatorsWork);
btnSub.addEventListener("click", operatorsWork);
btnMul.addEventListener("click", operatorsWork);
btnDiv.addEventListener("click", operatorsWork);
btnEqual.addEventListener("click", equals);

function add(a,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    console.log(operator)
    if (operator == "+") {
        numbers.a = add(+a,+b);
        delete numbers.b;
        lastAction = false;
        textShow.textContent = numbers.a;
        return numbers.a;
    }
    if (operator == "-") {
        numbers.a = subtract(+a, +b);
        delete numbers.b;
        lastAction = false;
        textShow.textContent = numbers.a;
        return numbers.a;
    }
    if (operator == "*") {
        numbers.a = multiply(+a, +b);
        delete numbers.b;
        lastAction = false;
        textShow.textContent = numbers.a;
        return numbers.a;
    }
    if (operator == "/") {
        numbers.a = divide(+a, +b);
        delete numbers.b;
        lastAction = false;
        textShow.textContent = numbers.a;
        return numbers.a;
    }
}

function operatorsWork(e) {
    if (lastAction === false && !(numbers.operator == "=")){
        numbers.operator = e.target.value;
        textTop.textContent = numbers.a + " " + numbers.operator;
        return
    }
    lastAction = false;
    console.log(numbers)
    
    if(!numbers.a) {
        numbers.operator = e.target.value;
        numbers.a = +textShow.textContent;
        textTop.textContent = numbers.a + " " + numbers.operator;
    }
    else if(!numbers.b) {
        numbers.b = +textShow.textContent;
        operate(numbers.a, numbers.b, numbers.operator);
        numbers.operator = e.target.value;
        textTop.textContent = numbers.a + " " + numbers.operator;
    }

}


function equals(e) {
    if (numbers.operator == "=") {
        return
    }
    if(!numbers.b) {
        numbers.b = +textShow.textContent;
        textTop.textContent = numbers.a + " " + numbers.operator + " " +numbers.b + " =";
        lastAction = false;
    }
        operate(numbers.a, numbers.b, numbers.operator);
        delete numbers.a;
        numbers.operator = e.target.value;
        lastAction = false;
}