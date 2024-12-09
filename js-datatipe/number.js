let integerNumber = 10;
let floatNumber = 3.14;
let negativeNumber = -5;

console.log("Integer:", integerNumber);
console.log("Float:", floatNumber);
console.log("Negative:", negativeNumber);

console.log("Infinity:", 1 / 0);
console.log("Negative Infinity:", -1 / 0);
console.log("NaN:", 0 / 0);

console.log("Math.random():", Math.random());
console.log("Math.round(3.6):", Math.round(3.6));
console.log("Math.floor(3.6):", Math.floor(3.6));
console.log("Math.ceil(3.1):", Math.ceil(3.1));
console.log("Math.pow(2, 3):", Math.pow(2, 3));

let num = 255;
console.log("Binary (255):", num.toString(2));
console.log("Hexadecimal (255):", num.toString(16));

let sum = 5 + 3;
let difference = 10 - 2;
let product = 4 * 2;
let quotient = 20 / 4;

console.log("Sum (5 + 3):", sum);
console.log("Difference (10 - 2):", difference);
console.log("Product (4 * 2):", product);
console.log("Quotient (20 / 4):", quotient);

let notANumber = "hello" / 2;
console.log("Not-a-Number Check:", isNaN(notANumber));
