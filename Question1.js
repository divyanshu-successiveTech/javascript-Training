
function getRandomElement(){
    return (Math.floor(Math.random()*10) +1)
}


let i = 0;
let temp = 11;
let current;

while(i < 2){
    current = getRandomElement();
    i++;
    if(temp != current){
        temp = current;
        console.log(current);
        
    }
    else{
        console.log("same")
    }
}




    



