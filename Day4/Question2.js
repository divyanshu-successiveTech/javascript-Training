// 2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")


// Method-1``
let str = "Hello John"

const reverseString =(str) =>{

    let result ="";

    for(let i = str.length-1 ;i >= 0;i--){
        result += str.charAt(i); 
    }
    return result;

}

// console.log(reverseString(str));




// Method-2
const recurReverse =(str,n,s) =>{

    if(n==-1){
        return s;
    }else{
        s += str.charAt(n);
        return recurReverse(str,n-1,s);
        
    }
}

// let s=""
// console.log(recurReverse(str,str.length-1,s));

let res="";
const arr = str.split(" ");
for(let i=0;i<arr.length;i++){
    
    res += reverseString(arr[i]+" ");
    
}

console.log(res);

