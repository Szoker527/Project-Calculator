const btnNum = document.querySelectorAll(".number");
const textShow = document.querySelector(".text-show")
const textTop = document.querySelector(".text-save")
const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".subtract");
const btnEqual = document.querySelector(".equal");
const operatorShow = document.querySelector(".operators");
let arrayNum = [];
let lastAction =  0;
const numbers = {
};

btnNum.forEach(num => num.addEventListener("click", function() {
    if (lastAction === "string") {
        textShow.textContent  = "";
        lastAction = 1;
    }
    textShow.textContent += this.value;
    console.log(typeof lastAction);
}))

btnAdd.addEventListener("click", operatorsWork);
btnSub.addEventListener("click", operatorsWork);

btnEqual.addEventListener("click", equals)

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
    if (operator == "+") {
        numbers.a = add(+a,+b);
        delete numbers.b;
        lastAction = "string";
        return numbers.a;
    }
}

function operatorsWork(e) {
    if (lastAction === "string"){
        numbers.operator = e.target.value;
        textTop.textContent = numbers.a + " " + numbers.operator;
        return
    }
    lastAction = "string";
    numbers.operator = e.target.value;
    console.log(numbers)
    if(!numbers.a) {
        numbers.a = +textShow.textContent;
        textTop.textContent = numbers.a + " " + numbers.operator;
    }
    else if(!numbers.b) {
        numbers.b = +textShow.textContent;
        operate(numbers.a, numbers.b, numbers.operator);
        textTop.textContent = numbers.a + " " + numbers.operator;
    }
    else {
        return;
    }

}


function equals() {
    if(!numbers.b) {
        numbers.b = +textShow.textContent;
        textTop.textContent = numbers.a + " " + numbers.operator + " " +numbers.b + " =";
    }

    if(numbers.operator == "+") {
        numbers.c = add(numbers.a,numbers.b);
        textShow.textContent = numbers.c;
    }
}