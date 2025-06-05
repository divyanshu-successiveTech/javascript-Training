
const getRandomElement = (max,min) => {
    return (Math.floor(Math.random()*(max-min) +min))
}


let i = 0;
let temp = 11;
let current;

//Checking if the two consecutive output are same or not.
do{
    current = getRandomElement(1,10);
    i++;
    if(temp != current){
        temp = current;
        console.log(current);//Print the numbers if not same.
        
    }
    else{
        console.log("same")
    }
}while(i < 2)



    



