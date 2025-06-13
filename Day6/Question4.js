// 4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number
let arr=[];
let max=2;

function createPromise(id){

    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log(`Task : ${id}`,"New Promise created");
            resolve(`Task : ${id} is done`);
            
  
        },1000); 
    })
}

for(let i=1;i<=11;i++){
    arr.push(createPromise(i));
}

let queue=[];

async function transfer(){
    let i=0;
    while(arr.length && i<2){
        queue.push(arr.shift());
        i++;
    }
    await calling(queue);
    
    queue.length=0;
    
}

while(arr.length){
    await transfer();
}

async function calling(currTasks){

    if(queue.length <= max){  
        const result = await Promise.allSettled(currTasks); 
        console.log(result); 
    }
    else{
        console.log("Queue is full");
    }
       
}


