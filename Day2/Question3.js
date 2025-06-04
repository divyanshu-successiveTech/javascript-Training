getRandomElement = () => Math.floor(Math.random()*10)+1;//First function

reqFunction = (func) => func+1;//Second function
     
const result = reqFunction(getRandomElement());//Calling first function in second function

console.log(result);