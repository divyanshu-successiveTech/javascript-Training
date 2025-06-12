
let queue=["abc"];
let max=4;

function createPromise(){

    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log("New Promise created");
            resolve("This is done");
            queue.push(resolve);
  
        },1000); 
    })
   
  
}

async function calling(){
    if(queue.length < max){  
        await createPromise();
        console.log(queue.length);

        await queue.pop();
    }
    else{
        console.log("Queue is full");
    }
       
}

calling()
calling()
calling()
calling()

