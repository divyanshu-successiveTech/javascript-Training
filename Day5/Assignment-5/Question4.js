// Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const obj ={
    id : 1,
    next : {
        id :2,
        nest : {1:2},
    },
    arr : [1,2,3,4,5],

    fun : function() {
        console.log("Hello");
    },

    date : new Date(),
}

const a=obj;


const newObj = {};

const deepClone = (obj,newObj) => {
    
    for(const c in obj){  
        
        if(typeof(obj[c]) === "object"){
            console.log("execute if")
            deepClone(obj[c],newObj);
        }else{   
            console.log("execute else")
            newObj[c] = obj[c];
        }
    }
    return newObj;
}


deepClone(obj,newObj);

newObj.arr=[4,45];
console.log(newObj);
console.log(obj);













