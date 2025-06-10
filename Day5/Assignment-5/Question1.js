// 1. Write a program to iterate over object.

const obj = {name : "ABC",
    age : 20,
    class : "A"
};

for(const c in obj){
    console.log(`${c} : ${obj[c]}`);
}


