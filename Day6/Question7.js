async function function1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("After 3 seconds");
        },3000)
    })
}

async function function2(){
    return new Promise((reject)=>{
        setTimeout(()=>{
            reject("After 2 seconds");
        },2000)
    })
}


async function trial(){
    p1=function1();
    p2=function2(); 
    
    let s=await Promise.allSettled([p1,p2]);
   
    console.log(s)
     console.log(1);
    
}
trial();