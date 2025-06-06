// 5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)



let text = "this is the string";
let str=text.trim();

//Mehod -1

const makeCamelCase =(str) =>{
    let curr="";
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)==" "){
            continue;
        }else if(str.charAt(i)!= " " && str.charAt(i-1)==" "){
            curr += str.charAt(i).toUpperCase();
        }else{
            curr+= str.charAt(i);
        }
    }
    return curr;
}
//Method-2
const toCamelCase = (str) => {
    arr= str.split(" ");
    curr="";
    for(let i=0;i<arr.length;i++){
        if(i<1){
            curr += arr[0];
        }else{
            let now=arr[i];
            now=now.charAt(0).toUpperCase() + now.slice(1);        
            curr += now;
        }

    }

    return curr;
}


console.log(makeCamelCase(text));
console.log(toCamelCase(text));
