//Task 1: Знайти суму та кількість позитивних елементів
let arr = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let sum = arr.reduce((accumulator, item) => {
    return (item > 0) ? accumulator + item: accumulator;
}, 0);

let positiveNumCount = arr.reduce((accumulator, item) => {
    return (item > 0) ? accumulator + 1 : accumulator;
}, 0);

console.log('Сума позитивних елементів масива: ' + sum + '\n' + 'Кількість позитивних елементів: ' + positiveNumCount);

//Task 2: Знайти мінімальний елемент масиву та його порядковий номер.
let minElement = arr[0];
let indexMin = 0;

arr.forEach((item, index) => {
    if(item < minElement){
        minElement = item;
        indexMin = index;
    }
});
console.log('Мінімальний елемент ' + minElement + ', порядковий номер якого ' + indexMin);

//Task 3: Знайти максимальний елемент масиву та його порядковий номер.
let maxElement = arr[0];
let indexMax = 0;

arr.forEach((item, index) => {
    if(item > maxElement){
        maxElement = item;
        indexMax = index;
    }
});
console.log('Максимальний елемент ' + maxElement + ', порядковий номер якого ' + indexMax);

//Task 4: Визначити кількість негативних елементів.
let negativeCount = arr.reduce((accumulator, item) => {
    return (item < 0)? accumulator + 1: accumulator;
}, 0);

console.log('Кількість негативних елементів масиву: ' + negativeCount);

//Task 5: Знайти кількість непарних позитивних елементів.
let countPositiveOdd = arr.filter(item => item % 2 !== 0 && item > 0).length;

console.log('Кількість непарних позитивних елементів: ' + countPositiveOdd);

//Task 6: Знайти кількість парних позитивних елементів
let countPositiveEven = arr.filter(item => item % 2 === 0 && item > 0).length;

console.log('Кількість парних позитивних елементів: ' + countPositiveEven);

//Task 7: Знайти суму парних позитивних елементів
let sumOfEvenPositive = arr.reduce((accumulator, item) => {
    return (item % 2 === 0 && item > 0)? accumulator + item: accumulator;
}, 0);

console.log('Сума парних позитивних елементів: ' + sumOfEvenPositive);

//Task 8: Знайти суму непарних позитивних елементів
let sumOfOddPositive = arr.reduce((accumulator, item) => {
    return (item % 2 !== 0 && item > 0)? accumulator + item: accumulator;
}, 0);

console.log('Сума непарних позитивних елементів: ' + sumOfOddPositive);

//Task 9: Знайти добуток позитивних елементів
let multPositive = arr.reduce((accumulator, item) => {
    return (item > 0)? accumulator * item: accumulator;
}, 1);

console.log('Добуток позитивних елементів: ' + multPositive);

//Task 10: Знайти найбільший серед елементів масиву, остальні обнулити
let arrayAfterMap = arr.map(item => (item !== maxElement)? 0 : item);

console.log(arrayAfterMap);