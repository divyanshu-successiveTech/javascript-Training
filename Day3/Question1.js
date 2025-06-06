//1. Write a program to perform functionality of a calculator (add,sub,multiply,divide)



let num1 = parseFloat(prompt("Enter first number"));
let num2 = parseFloat(prompt("Enter second number"));

const sum = (num1,num2) => {return num1+num2 };

const diff = (num1,num2) => {return num1-num2};

const multiply = (num1,num2) => {return num1*num2};

const divide = (num1,num2) => {return num1/num2};

let a = prompt("Enter the operand");

//Method-1

// if(a == "+"){
//     console.log(sum(num1,num2));
// }else if(a == "-"){
//     console.log(diff(num1,num2));
// }else if(a == "*"){
//     console.log(multiply(num1,num2));
// }else if(a == "/"){
//     console.log(divide(num1,num2));
// }else{
//     console.log("Invalid")
// }


// Method-2
const calc = (a) => {

    switch (a) {
        case "+":
            return(sum(num1,num2));
            break;
        case "-":
            return(diff(num1,num2));
            break;
        case "*":
            return(multiply(num1,num2));
            break;
        case "/":
            return(divide(num1,num2));
            break;
        defalut:
            return("Invalid Operand"); 
    }
}

console.log(calc(a));