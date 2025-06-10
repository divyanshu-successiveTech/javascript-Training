// 6. Write a program to find sum of an array


//Method-1
const arr=[1,2,3,4,5,6,7];

const findSum = (arr) => {
    let sum=0;

    for(const value of arr){
        sum+=value;
    }
    console.log(sum);
}

findSum(arr);

// Method-2
let curr=0;

const recurSum = (arr,n,curr) =>{
    
    if(n==-1){
        console.log(curr);
        return;
    }else{
        curr += arr[n];
        return recurSum(arr,n-1,curr);
    }

}
recurSum(arr,arr.length-1,curr);