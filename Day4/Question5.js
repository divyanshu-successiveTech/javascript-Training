let text = "this is the string";
let str=text.trim();

const makeCamelCase =(str) =>{
    let curr="";
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)==" "){
            curr += str.charAt(i+1).toUpperCase();
            i++;
        }else{
            curr += str.charAt(i);
        }
    }
    return curr;
}

console.log(makeCamelCase(text));
