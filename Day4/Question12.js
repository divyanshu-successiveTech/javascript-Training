let arr1=[1,2,3,4,5,6];
let arr2= [2,3,4,8,9];

const intersectArrays = (firstArr,secondArr) =>{

    let result = [];

    for(let i=0;i<secondArr.length;i++){
    
        if(firstArr.includes(secondArr[i]) && !result.includes(secondArr[i])){
        
            result.push(secondArr[i]);
        }
    }

    return result;
}

console.log(intersectArrays(arr1,arr2));

