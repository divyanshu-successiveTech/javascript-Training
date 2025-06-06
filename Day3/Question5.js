//5. Write a program to print all even number first and then all odd numbers using only one iteration



let userInput = parseFloat(prompt("Enter the limit"));

let even="";
let odd="";
let i=1;

while(i<=userInput){
    if(i%2==0){
        even += (i +" ");
    }else{
        odd += (i +" ");
    }
    i++;
}
console.log(even);
console.log(odd);