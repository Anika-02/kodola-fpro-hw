let numbers = [];

for(let i = 0; i < 3; i++) {
    let input = +prompt(`Введіть ${i+1} число:`, '1');

    while(isNaN(input)) {
        input = +prompt(`Введіть правильно ${i+1} число:`, '2');
    }

    numbers.push(input);
}

let sum = numbers.reduce((accumulator, item) => accumulator + item, 0);

alert(`Середнє арифмітчне цих чисел дорівнює ${sum/numbers.length}`);