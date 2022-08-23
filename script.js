const btnNum = document.querySelectorAll(".number");
const currentShow = document.getElementById("text-bot")
const currentTop = document.getElementById("text-top")
const btnAdd = document.querySelector(".add");
const btnSub = document.querySelector(".subtract");
const btnMul = document.querySelector(".multiply");
const btnDiv = document.querySelector(".divide");
const btnEqual = document.querySelector(".equal");
const btnClear = document.querySelector(".clear");
const btnDot = document.querySelector(".dot");
const btnDelete = document.querySelector(".delete")
const numbers = {};
let lastAction =  false;
let isEqual = false;
currentShow.textContent = "0";

btnNum.forEach(num => num.addEventListener("click", function() {
    if (numbers.operator == "=") {
        if (currentShow.textContent.slice(0,1) == 0) {
            currentShow.textContent = "";
        }
        currentShow.textContent += this.value;
        lastAction = false;
        return;
    }
    if (lastAction === true) {
        currentShow.textContent = "";
        lastAction = false;
    }
    if (currentShow.textContent.indexOf('.') !== -1) {
        currentShow.textContent += this.value;
        return;
    }
    if (currentShow.textContent.slice(0,1) == 0) {
        currentShow.textContent = "";
    }
    currentShow.textContent += this.value;
}))

window.addEventListener("keydown", function(e) {
    const btnInput =  document.querySelector(`button[data-key="${e.key}"]`)
    if (!btnInput) {
        return
    }
    if (numbers.operator == "=") {
        currentShow.textContent += btnInput.value;
        return
    }
    if (!numbers.operator && currentShow.textContent == 0) {
        currentShow.textContent  = "";
        lastAction = false;
    }
    if (lastAction === true) {
        currentShow.textContent  = "";
        lastAction = false;
    }
    currentShow.textContent += btnInput.value;
    console.log(typeof currentShow.textContent)
})

btnDot.addEventListener("click", () => {
    if (currentShow.textContent.indexOf('.') !== -1) {
        return
      } else {
        currentShow.textContent  += ".";
    }
})

btnDelete.addEventListener("click", () => {
    if (currentShow.textContent.slice(0, 1) === "0") {
        return
    }
     currentShow.textContent = currentShow.textContent.slice(0, -1); 
     console.log(currentShow.textContent)
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
    lastAction = false
    currentShow.textContent = 0;
    currentTop.textContent = "";
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
    if (b == 0 && operator == '÷') {
        delete numbers.b;
        currentShow.textContent = numbers.a;
        return alert("ERROR!")
    }
    if (operator == '+') {
        numbers.a = add(+a,+b);
        numbers.c = numbers.a;
        delete numbers.b;
        currentShow.textContent = numbers.a;
    }
    if (operator == '−') {
        numbers.a = subtract(+a, +b);
        numbers.c = numbers.a;
        delete numbers.b;
        currentShow.textContent = numbers.a;
    }
    if (operator == '×') {
        numbers.a = multiply(+a, +b);
        numbers.c = numbers.a;
        delete numbers.b;
        currentShow.textContent = numbers.a;
    }
    if (operator == '÷') {
        numbers.a = divide(+a, +b);
        numbers.c = numbers.a;
        delete numbers.b;
        currentShow.textContent = numbers.a;
    }
    
}


function operatorsWork(e) {
     if (lastAction === true) {
        numbers.operator = e.target.value;
        currentTop.textContent = numbers.a + " " + e.target.value;
        return
    }
    lastAction =  true;
    if(!numbers.a) {
        numbers.a = +currentShow.textContent;
        currentTop.textContent = numbers.a + " " + e.target.value;
    }
    else if(!numbers.b) {
        numbers.b = +currentShow.textContent;
        operate(numbers.a, numbers.b, numbers.operator);
        currentTop.textContent = numbers.a + " " + e.target.value;
    }
    numbers.operator = e.target.value;

}


function equals() {
    if (lastAction === true || numbers.operator == "=") {
        return;
    }
    if(!numbers.a) {
        return;
    }
    lastAction =  false;
    if(!numbers.b) {
        numbers.b = +currentShow.textContent;
        currentTop.textContent = numbers.a + " " + numbers.operator + " " + numbers.b + " =";
        operate(numbers.a, numbers.b, numbers.operator);
        numbers.operator = "=";
        delete numbers.a;
    }
}
