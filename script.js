let firstNum = prompt('Input the first number: ', '2');
let secondNum = prompt('Input the second number: ', '2');

let num1 = Number(firstNum);
let num2 = Number(secondNum);

if(String(num1) === "NaN" || String(num2) === "NaN" || !String(firstNum).trim() || !String(secondNum).trim()){
    alert("Wrong Input");
}
else if(num2 !== 0)
{
    alert(`${num1} + ${num2} = ` + (num1 + num2) + '\n' + `${num1} - ${num2} = ` + (num1 - num2) + '\n' + `${num1} * ${num2} = ` + (num1 * num2) + '\n' + `${num1} / ${num2} = ` + (num1 / num2));
}
else {
    alert('You can\'t divide by zero! Please enter another number');
}