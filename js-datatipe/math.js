let sum = Math.add(5, 3);
let difference = Math.subtract(10, 2);
let product = Math.multiply(4, 2);
let quotient = Math.divide(20, 4);

console.log("Sum (5 + 3):", sum);
console.log("Difference (10 - 2):", difference);
console.log("Product (4 * 2):", product);
console.log("Quotient (20 / 4):", quotient);

console.log("Math.random():", Math.random());
console.log("Math.round(3.6):", Math.round(3.6));
console.log("Math.floor(3.6):", Math.floor(3.6));
console.log("Math.ceil(3.1):", Math.ceil(3.1));
console.log("Math.pow(2, 3):", Math.pow(2, 3));

let num = 255;
console.log("Binary (255):", num.toString(2));
console.log("Hexadecimal (255):", num.toString(16));

let notANumber = "hello" / 2;
console.log("Not-a-Number Check:", isNaN(notANumber));
