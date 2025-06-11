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

main(arr);


