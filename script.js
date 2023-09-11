//Task 1: Дано масив з елементами різних типів.
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// let arr = [3, 21, 'lamp', true, 'table', 3];
//
// function average(array) {
//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (typeof(array[i]) === "number") {
//             count++;
//             sum += array[i];
//         }
//     }
//
//     return console.log(sum/count);
// }
//
// average(arr);

//Task 2: Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

// function doMath(x, znak, y) {
//     if (!isNaN(x) && !isNaN(y)) {
//         if (y === 0 && znak === '/') {
//             y = +prompt('На 0 ділити не можна! Введіть друге число правильно!', '2');
//         }
//         switch (znak){
//             case '+':
//                 alert(`${x} + ${y} = ${x + y}`);
//                 break;
//             case '-':
//                 alert(`${x} - ${y} = ${x - y}`);
//                 break;
//             case '*':
//                 alert(`${x} * ${y} = ${x * y}`);
//                 break;
//             case '/':
//                 alert(`${x} / ${y} = ${x / y}`);
//                 break;
//             case '%':
//                 alert(`${x} % ${y} = ${x % y}`);
//                 break;
//             case '^':
//                 alert(`${x} ^ ${y} = ${Math.pow(x,y)}`);
//                 break;
//             default:
//                 alert('Введіть правильну математичну операцію (+, -, *, /, %, ^)!');
//                 break;
//         }
//     }
// }
//
// let num1 = +prompt('Введіть перше число', '2');
// let num2 = +prompt('Введіть друге число', '2');
// let mathOperation = prompt('Введіть математичну операцію (+, -, *, /, %, ^)', '+');
//
// while (isNaN(num1)) {
//     num1 = +prompt('Введіть правильно перше число!', '2');
// }
//
// while (isNaN(num2)) {
//     num2 = +prompt('Введіть правильно друге число!', '2');
// }
//
// doMath(num1, mathOperation, num2);

//Task 3: Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

// function fillOfTwoDimensionalArray() {
//     let rows = +prompt("Введіть кількість рядків");
//     let columns = +prompt("Введіть кількість колонок");
//     let arr = [];
//
//     for (let i = 0; i < rows; i++) {
//         arr[i] = [];
//         for (let j = 0; j < columns; j++) {
//             const userInput = prompt(`Введіть елемент для рядка ${i + 1}, стовпця ${j + 1}:`);
//             arr[i].push(userInput);
//         }
//     }
//
//     return arr;
// }
//
// console.log(fillOfTwoDimensionalArray());


//Task 4: Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

// function deleteSymbol(str, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const symbol = arr[i];
//         str = str.split(symbol).join('');
//     }
//     return str;
// }
//
// let modifiedStr = deleteSymbol("hello world", ['l', 'd']);
// console.log(modifiedStr);
