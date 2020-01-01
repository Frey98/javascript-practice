/*
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

/*let calculator = {
    read: function() {
        let num1 = +prompt('num1?', 0);
        let num2 = +prompt('num2?', 0);
        return num1, num2
    },
    sum: function() {
        return num1 + num2;
    },
    mul: function() {
        return num1 * num2;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );*/

let calculator = {
    read() {
        this.num1 = +prompt('num1?', 0);
        this.num2 = +prompt('num2?', 0);
    },
    sum() {
        return this.num1 + this.num2;
    },
    mul() {
        return this.num1 * this.num2;
    }
};

calculator.read();
alert( `the sum is ${calculator.sum()}` );
alert( `the multiplication is ${calculator.mul()}` );