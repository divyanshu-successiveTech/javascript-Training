//7. Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)



let num = 2;
// Method-1
while(num <= 4096){
    console.log(num);
    num=num*2;
}

// Method-2

const recurPrint = (n) =>{
    if(n < 4096){
        console.log(n);
        return recurPrint(n*2);
    }
    return;
    
    
}

recurPrint(num);