function pow(number, degree) {
    if (degree < 0) return (1/number * pow(number, degree + 1)).toFixed(4);
    else if (degree === 0) return 1;
    else return number * pow(number, degree - 1);
}
console.log(pow(2,1));