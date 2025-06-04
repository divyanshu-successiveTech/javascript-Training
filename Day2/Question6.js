
let inputNumber = prompt("Enter any number:")//Taking user input.

//Implementation
isEven = (a) => {
    if(a%2 == 0){
        return true;
    }else{
        false;
    }

}
var result = isEven(inputNumber);
console.log(result);//Printing to browser console.