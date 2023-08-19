let mathOperation = prompt("Choose a math operation: add, sub, mult, div", "add");
let firstNum = prompt("Input a first number", "2");
let secondNum = prompt("Input a second number", "2");

let num1 = +firstNum;
let num2 = +secondNum;

if(String(num1) === "NaN" || String(num2) === "NaN" || !mathOperation.trim() || !firstNum.trim() || !secondNum.trim()){
    alert("Invalid input!");
}
else if(num2 === 0 && mathOperation === 'div') {
    alert("You can\'t divide by zero! Please enter another number");
}
else {
    switch (mathOperation){
        case 'add':
            alert(`${firstNum} + ${secondNum} = ` + (+firstNum + +secondNum));
            break;
        case 'sub':
            alert(`${firstNum} - ${secondNum} = ` + (+firstNum - +secondNum));
            break;
        case 'mult':
            alert(`${firstNum} * ${secondNum} = ` + (+firstNum * +secondNum));
            break;
        case 'div':
            alert(`${firstNum} / ${secondNum} = ` + (+firstNum / +secondNum));
            break;
        default:
            alert(`Error`);
            break;
    }
}
