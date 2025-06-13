// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const obj= [
    {
        name: "John",
        age: 26
    },
    {  
        name: "Doe",
        age: '15'
    },
    {    
        name: "Peter",
        age: 47
    }
]

function checkNumber(n){
    if(typeof(n) === "number"){
        return n;
    }else{
        Number(n);
        return n;
    }
}

for(let i=0;i<obj.length;i++){
    checkNumber(obj[i].age)

}

obj.sort((a,b)=> a.age - b.age );
console.log(obj);