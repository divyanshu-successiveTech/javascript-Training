//9. Write a program to print fibonaaci series



let first = 0;
let second = 1;
let n=10;


// console.log(first);
// console.log(second);
// for(let i=3;i<=n;i++){
//     let temp=second;
//     second=second+first;
//     first=temp;
//     console.log(second);

// }



//Method-2

const fibonnaci = (n,a=0,b=1) => {
    if(n<2){
        return;
    }
    let curr= a+b;
    console.log(curr);

    return fibonnaci(n-1,b,curr);
}
fibonnaci(10)
