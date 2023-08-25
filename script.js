let arrayLength = +prompt('Input length of array:', '3');

while (isNaN(arrayLength) || arrayLength <= 0) {
    arrayLength = +prompt(`Enter a valid number: `, '5');
}

let arr = [];

for (let i = 0; i < arrayLength; i++) {
    arr.push(prompt(`Input ${i + 1} element of array: `, '2'));
}

console.log('Array: ' + arr);

console.log('Sorted array: ' + arr.sort((a, b) => a.localeCompare(b)));

arr.splice(1,3);
console.log('Array after splice: ' + arr);