
let inputNumber = parseFloat(prompt("Enter any number:"))//Taking user input.

//Implementation
isEven = (number) => 
    number%2 == 0 ? "Even" : "Odd";


var result = isEven(inputNumber);
console.log(result);//Printing to browser console.