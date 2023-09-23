let firstStr = document.querySelector('#first-string');
let secondStr = document.querySelector('#second-string');
let thirdStr = document.querySelector('#third-string');
let resultStr = document.querySelector('#result-string');

function updateResult () {
    let str1 = firstStr.value;
    let str2 = secondStr.value;
    let str3 = thirdStr.value;

    resultStr.value = str1 + ' ' + str2 + ' ' + str3;
}

firstStr.addEventListener('input', updateResult);
secondStr.addEventListener('input', updateResult);
thirdStr.addEventListener('input', updateResult);

//Task for number
let number = document.querySelector('#number');
let numResult = document.querySelector('#result-number');
number.addEventListener('input', () => {
    let num = number.value;
    let numbers = [];

    for(let i = 0; i < num.length; i++) {
        numbers.push(num[i]);
    }

    numResult.value = numbers.join(' ');
})








