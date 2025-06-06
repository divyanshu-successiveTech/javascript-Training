// 10. Write a program to concatenate an input of array of arrays



// Method-1
arr=arr.flat();
console.log(arr);



// Method-2
let arr=[[1,2,3],2,3,[4,5,6,[1,2]]];
let res = [];
const flatten = (arr1,arr2) => {   
    for (const c of arr2){
        if(Array.isArray(c)){
            return flatten(arr2,c);
        }else{
            arr.push(c);
        }
    }return res;
    
}
for(const i of arr){
    if(Array.isArray(i)){
        flatten(res,i);
    }else{
        res.push(i);
    }
}

console.log(res);