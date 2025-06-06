// 7. Write a program to find index of duplicate elements in an array


let arr=[5,2,2,3,4,5,1,6,2,1];


// const findDuplicate = (arr) => {

//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(j!=i && arr[i] == arr[j]){
//                 console.log(`Element ${arr[i]} that is present at ${i} has a duplicate at index ${j}`);
//             }
//         }
//     }
// }
// findDuplicate();


const findFirstDuplicateonly = (arr) => {

    const set= new Set();

    for(const c of arr){
        set.add(c);
    }    

    for(const curr of set){
        let count=1
        for(let i = 0;i<arr.length;i++){
            if(curr ==  arr[i]  && count < 2 ){
                count++;
                
            }else if(curr == arr[i] ){
                console.log(`Element ${arr[i]} has a duplicate at ${i}`);
                break;

            }
            
        }
    }
}

findFirstDuplicateonly(arr);