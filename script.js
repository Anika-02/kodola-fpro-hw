//Task 1: Вивести на сторінку в один рядок через кому числа від 10 до 20
let str = '10';
let i = 11;

do {
    str += `, ${i}`;
    i++;
} while (i <= 20)
console.log(str);

//Task 2: Вивести квадрати чисел від 10 до 20
// let i = 10;
// do {
//     console.log(i ** 2);
//     i++;
// } while (i <= 20)

//Task 3: Вивести таблицю множення на 7
// for (let i = 1; i <= 10; i++){
//     console.log(`7 * ${i} = ${7 * i}`);
// }

//Task 4: Знайти суму всіх цілих чисел від 1 до 15
// let i = 1;
// let sum = 0;
//
// while (i < 16){
//     sum += i;
//     i++;
// }
// console.log(sum);

//Task 5: Знайти добуток усіх цілих чисел від 15 до 35
// let mult = 1;
//
// for (let i = 15; i < 36; i++){
//     mult *= i;
// }
// console.log(mult);

//Task 6: Знайти середнє арифметичне всіх цілих чисел від 1 до 500
// let sum = 0;
// let i = 1;
//
// while(i <= 500) {
//     sum += i;
//     i++;
// }
// console.log(sum / 500);

//Task 7: Вивести суму лише парних чисел в діапазоні від 30 до 80
// let sum = 0;
//
// for(let i = 30; i <= 80; i++){
//     if (i % 2 === 0){
//         sum += i;
//     }
// }
// console.log(sum);

//Task 8: Вивести всі числа в діапазоні від 100 до 200 кратні 3
// let i = 100;
// while (i <= 200) {
//     if(i % 3 === 0){
//         console.log(i);
//     }
//     i++;
// }

//Task 9: Дано натуральне число. Знайти та вивести на сторінку всі його дільники
// let num = 38;
//
// for(let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         console.log(i);
//     }
// }

//Task 10: Визначити кількість його парних дільників
// let num = 38;
// let i = 1;
// let count = 0;
// while(i <= num){
//     if(num % i === 0 && i % 2 === 0){
//         count++;
//     }
//     i++;
// }
// console.log(count);

//Task 11: Знайти суму його парних дільників
// let num = 38;
// let sum = 0;
//
// for (let i = 1; i <= num; i++){
//     if(num % i === 0 && i % 2 === 0){
//         sum += i;
//     }
// }
// console.log(sum);

//Task 12: Надрукувати повну таблицю множення від 1 до 10
// for (let i = 1; i <= 10; i++) {
//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i * j}`);
//     }
//     console.log('\n');
// }