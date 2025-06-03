getRandomElement = () => Math.floor(Math.random()*10)+1;

reqFunction = (func) => func+1;
     
const result = reqFunction(getRandomElement());

console.log(result);