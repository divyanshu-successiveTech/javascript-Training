// 3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const arr=[
    {
        id :1,
        name: "John",
        age: 26
    },
    {  
        id :2,
        name: "Doe",
        age: 15
    },
    {    
        id :3,
        name: "Peter",
        age: 47
    }
]

for(const c of arr){
    delete c.id;
}
// console.log(arr.id);
console.log(arr);