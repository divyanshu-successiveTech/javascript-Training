// 6. Implement a function that returns a resolved Promise after a specified delay using async/await.

function test(){
    return new Promise( (resolve) =>{
        setTimeout(()=>{
            resolve("This is working");
        },5000)
    })
}

(async ()=>{
    const result = await test();
    console.log(result);
    
})()