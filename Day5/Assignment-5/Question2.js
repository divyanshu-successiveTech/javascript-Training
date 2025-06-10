// 2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const obj= [
    {
        name: "John",
        age: 26
    },
    {  
        name: "Doe",
        age: 15
    },
    {    
        name: "Peter",
        age: 47
    }
]

obj.sort((a,b)=> a.age - b.age );
console.log(obj);