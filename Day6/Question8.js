// 8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.



const function1 =  ()=>{

    return new Promise((resolve)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(response=>response.json()).then(response => resolve(response))
    })

}

const function2 =  ()=>{

    return new Promise((resolve)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/2').then(response=>response.json()).then(response => resolve(response))
    })

}

const function3 = ()=>{

    return new Promise((resolve)=>{
        fetch('https://jsonplaceholder.typicode.com/todos/3')
        .then(response=>response.json())
        .then(response => resolve(response))
    })

}



let arr=[];
async function main(arr){
    const first =await function1().then(response => response);
    const second=await function2().then(response => response);
    const third=await function3().then(response => response);

    arr.push(first);
    arr.push(second);
    arr.push(third);

    console.log(arr)
    let sum=0;
    sum += first.id + second.id + third.id;
    console.log("The sum of all the id is : " + sum);
}

// main(arr);



//Method-2

async function multiplePromises(){
    const urls =['https://jsonplaceholder.typicode.com/todos/1','https://jsonplaceholder.typicode.com/todos/2','https://jsonplaceholder.typicode.com/todos/3'];

    const responses = await Promise.all(urls.map(url => fetch(url)));
    const arr= await Promise.all(responses.map(res => res.json()));
    console.log(arr);
    let sum=0;
    for(let i =0;i<arr.length;i++){
        sum += arr[i].id;
    }

    console.log(sum);
}

multiplePromises();


