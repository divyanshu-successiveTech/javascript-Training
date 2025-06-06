// 1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")



const removeDuplicate = (str) => {
    
    const mySet = new Set();

    for(let i =0;i<str.length;i++){
        mySet.add(str.charAt(i));
    }
    let res="";
    for(const val of mySet){
        res += val;
    }
    return res;
}



console.log(removeDuplicate("hello world"));