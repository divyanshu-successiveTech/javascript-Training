// 6. Write a program to find sum of an array



const arr=[1,2,3,4,5,6,7];

const findSum = (arr) => {
    let sum=0;

    for(const value of arr){
        sum+=value;
    }
    console.log(sum);
}

findSum(arr);