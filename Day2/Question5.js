//Taking user inputs
let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number"));

getsum = ( a, b) => Number(a) + Number(b);

let sum = getsum(firstNumber,secondNumber);

console.log(sum);//Printing to browser console