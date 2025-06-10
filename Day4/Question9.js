// 9. Write a program to find the last duplicate index in an array


a=[1,2,3,4,5,6,2,3,8,8,2];

// const findLastDuplicate = (arr) =>{

//     for(let i=0;i<a.length;i++){
//         let curr=-1;
//         for(let j=i+1;j < a.length;j++){
            
//             if(j!=i && a[i] == a[j]){            
//                 if(j>curr){
//                     curr=j
//                 }
                
//             }

//             }
//             if(curr!=-1){
//                 console.log(`Duplicate for ${a[i]} is present at ${curr}`);
//                 curr=-1;
//             }

//     }
// }

// findLastDuplicate(a);


const findLastDuplicateonly = (a) =>{

    const map = new Map();

    for(let i=0;i<a.length;i++){
        if(map.has(a[i])){
            map.set(a[i],i);
        }else{
            map.set(a[i],-1);
        }
    }

    for([key,value] of map){
        if(value>-1){
            console.log(`${key} has last duplicate at ${value}`);
        }
    }

}

findLastDuplicateonly(a);