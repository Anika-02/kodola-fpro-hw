class SuperMath {
    check(obj) {
        const { X, Y, znak } = obj;
        const confirmMessage = `Do you want to perform an operation ${X} ${znak} ${Y}?`;

        if (this.isValidOperator(znak) && confirm(confirmMessage)) {
            const result = this.performOperation(X, Y, znak);
            if (result !== undefined) {
                alert(`${X} ${znak} ${Y} = ${result}`);
            }
        } else {
            this.input();
        }
    }

    isValidOperator(operator) {
        return ['+', '-', '/', '*', '%'].includes(operator);
    }

    performOperation(X, Y, znak) {
        switch (znak) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '*':
                return X * Y;
            case '/':
                if (Y !== 0) {
                    return X / Y;
                } else {
                    alert('Division by 0 is impossible');
                    this.input();
                }
                break;
            case '%':
                return X % Y;
        }
    }

    input() {
        const X = +prompt('Enter the number X:');
        const znak = prompt('Enter the operation (+, -, /, *, %):');
        const Y = +prompt('Enter the number Y:');

        if (!isNaN(X) && !isNaN(Y) && this.isValidOperator(znak)) {
            const result = this.performOperation(X, Y, znak);
            if (result !== undefined) {
                alert(`${X} ${znak} ${Y} = ${result}`);
            }
        } else {
            alert('Incorrect data. Please enter numbers and a valid operator');
            this.input();
        }
    }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);