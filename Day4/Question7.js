const findDuplicate = (arr) => {

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(j!=i && arr[i] == arr[j]){
                console.log(`Element ${arr[i]} has a duplicate at index ${j}`);
            }
        }
    }
}

findDuplicate([5,2,2,3,4,5,1,6,2]);