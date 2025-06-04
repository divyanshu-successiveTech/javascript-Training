let num1 = parseFloat(prompt("Enter first number"));
let num2 = parseFloat(prompt("Enter second number"));

const sum = (num1,num2) => num1*1+num2*1;

const diff = (num1,num2) => num1*1-num2*1;

const multiply = (num1,num2) => num1*1*num2*1;

const divide = (num1,num2) => num1*1/num2*1;

let a = parseFloat(prompt("Enter the operand"));

if(a == "+"){
    console.log(sum(num1,num2));
}else if(a == "-"){
    console.log(diff(num1,num2));
}else if(a == "*"){
    console.log(multiply(num1,num2));
}else if(a == "/"){
    console.log(divide(num1,num2));
}else{
    console.log("Invalid")
}