function sumManipulation(){
    let sum = 0;
    function sumOfNum (number){
        sum += number;
        return sum;
    }

    return sumOfNum;
}

let sum = sumManipulation();

console.log(sum(3));
console.log(sum(5));
console.log(sum(20));