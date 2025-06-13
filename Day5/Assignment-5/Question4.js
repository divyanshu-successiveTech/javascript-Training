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

    
}

const a=obj;

const deepClone = (obj) => {
    let newObj = obj.hasOwnProperty('length')?[]:{};
    for(const c in obj){  
        if(typeof(obj[c]) == "object"){ 
            newObj[c] = deepClone(obj[c]);
        }else{
            newObj[c] = obj[c];            
        }   
    }
    return newObj;
}


let ans = deepClone(obj);

ans.next.nest["1"]=4;
console.log(ans);
console.log(obj);













