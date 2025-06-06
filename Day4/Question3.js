// 3. Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")


const countAndGive = (string) => {

    const map = new Map();

    for(let i =0;i<str.length;i++){
        if(map.has(str.charAt(i))){
            map.set(str.charAt(i),map.get(str.charAt(i))+1);

        }else{
            map.set(str.charAt(i),1);
        }
    }

    let result="";
    for(const [key,value] of map){
        result+=`${key}${value}`
    }

    return result;


}

console.log(countAndGive("aaaabb"));
