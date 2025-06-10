// 13. Write a program to return inverse of an array




let arr=[2,3,4,0,1];

const inverseArray = (arr) =>{
    let inverse=[];

    for(let i=0;i<arr.length;i++){
        inverse[arr[i]]=i;
    }
    return inverse;
}

console.log(inverseArray(arr));