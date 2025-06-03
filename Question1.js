
function getRandomElement(){
    return (Math.floor(Math.random()*10) +1)
}


let i = 0;
let temp = 11;
let current;

//Checking if the two consecutive output are same or not.
while(i < 2){
    current = getRandomElement();
    i++;
    if(temp != current){
        temp = current;
        console.log(current);//Print the numbers if not same.
        
    }
    else{
        console.log("same")
    }
}




    



