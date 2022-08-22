const btnNum = document.querySelectorAll(".number");
const textShow = document.querySelector(".text-show")
const textTop = document.querySelector(".text-save")
const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".subtract");
const btnMul = document.querySelector(".multiply");
const btnDiv = document.querySelector(".divide");
const btnEqual = document.querySelector(".equal");
const btnClear = document.querySelector(".clear");
const operatorShow = document.querySelector(".operators");
let lastAction =  true;
let isEqual = false;
const numbers = {};
textShow.textContent = 0;

btnNum.forEach(num => num.addEventListener("click", function() {
    if (numbers.operator == "=") {
        textShow.textContent += this.value;
        return
    }
    if (!numbers.operator && textShow.textContent == 0) {
        textShow.textContent  = "";
        lastAction = true;
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

window.addEventListener("keydown", function(e) {
    const btnInput =  document.querySelector(`input[data-key="${e.key}"]`)
    if (!btnInput) {
        return
    }
    if (numbers.operator == "=") {
        textShow.textContent += btnInput.value;
        return
    }
    if (!numbers.operator && textShow.textContent == 0) {
        textShow.textContent  = "";
        lastAction = true;
    }
    if (lastAction === false) {
        textShow.textContent  = "";
        lastAction = true;
    }
    else if(isEqual === true) {
        textShow.textContent  = "";
    }
    textShow.textContent += btnInput.value;
})

btnAdd.addEventListener("click", operatorsWork);
btnSub.addEventListener("click", operatorsWork);
btnMul.addEventListener("click", operatorsWork);
btnDiv.addEventListener("click", operatorsWork);
btnEqual.addEventListener("click", equals);

btnClear.addEventListener("click", function() {
    delete numbers.a 
    delete numbers.b
    delete numbers.operator
    textShow.textContent = 0;
    textTop.textContent = "";
})


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
    if (b == 0) {
        return alert("ERROR!")
    }
    if (operator == '+') {
        numbers.a = add(+a,+b);
        delete numbers.b;
        lastAction = false;
        textShow.textContent = numbers.a;
        return numbers.a;
    }
    if (operator == '-') {
        numbers.a = subtract(+a, +b);
        delete numbers.b;
        lastAction = false;
        textShow.textContent = numbers.a;
        return numbers.a;
    }
    if (operator == '×') {
        numbers.a = multiply(+a, +b);
        delete numbers.b;
        lastAction = false;
        textShow.textContent = numbers.a;
        return numbers.a;
    }
    if (operator == '÷') {
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
    if (numbers.operator == "=" || lastAction === false) {
        return
    }
    if(!numbers.b) {
        numbers.b = +textShow.textContent;
        textTop.textContent = numbers.a + " " + numbers.operator + " " + numbers.b + " =";
        lastAction = false;
    }
        operate(numbers.a, numbers.b, numbers.operator);
        delete numbers.a;
        numbers.operator = e.target.value;
        lastAction = false;
}
