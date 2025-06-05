const changeCaseToLower = (str) =>{

    let currstr=""
    for(let i =0 ;i < str.length;i++){
        let curr=0;
        
        curr = str.charAt(i).charCodeAt();
        if(curr < 91){
            currstr += String.fromCharCode(curr + 32);
            
        }else{
            currstr+= str.charAt(i);
        }

    }
    return currstr;
}


const changeCaseToUpper = (str) =>{

    let currstr=""
    for(let i =0 ;i < str.length;i++){
        let curr=0;
        
        curr = str.charAt(i).charCodeAt();
        if(curr > 96){
            currstr += String.fromCharCode(curr - 32);
            
        }else{
            currstr+= str.charAt(i);
        }

    }
    return currstr;
}

console.log(changeCaseToUpper("Hello"));