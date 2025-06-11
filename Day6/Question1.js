function implement(url,func){
    fetch(url)
    .then(data => data.json())
    .then(response => func(response))   
}

let url = 'https://jsonplaceholder.typicode.com/todos';



function log(data){
    console.log(data)
}

implement(url,log);

