
let arr=[];
let max=4;

function createPromise(id){

    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log(`Task : ${id}`,"New Promise created");
            resolve("This is done");
            
  
        },1000); 
    })
   
  
}

arr.push(createPromise(1),createPromise(2),createPromise(3),createPromise(4));

queue=[];

function transfer(){
    for(let i=0;i<2;i++){
        queue.push(arr.shift())
    }
    calling(queue);
    queue=[];
}

async function calling(currTasks){
    if(arr.length < max){  

        const result=await Promise.all(currTasks);
        queue.push(arr.shift());
        arr.pop();
        console.log(arr);
    }
    else{
        console.log("Queue is full");
    }
       
}


