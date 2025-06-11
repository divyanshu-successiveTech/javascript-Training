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