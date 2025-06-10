// 8. Write a program to remove dupliacte elements from an array




a=[1,2,3,2,1,4,5,6,3,5];

const removeDuplicate = (arr) => {
    for (let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if( arr[i]==arr[j]){
                arr.splice(j,1);
            }
        }
    }

    return arr;
}

console.log(removeDuplicate(a));

