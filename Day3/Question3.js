function pattern(){

    let num=parseFloat(prompt("Enter a number:"))
    let curr=1;
    for(let i=1;i<=num;i++){
        let x="";
        for(let j=1;j<=num-curr;j++){
            x+=" ";
        }
        for(let k=num-curr;k<num;k++){
            x+="* "
        }
        curr++;
        console.log(x);
    }curr=1;
    for(let i=1;i<=num ;i++){
        let x=""
        for(let q = 1;q<=curr ;q++){
            x+= " ";
        }
        for(let w = 1;w<=num-curr ; w++){
            x+="* ";
        }
        curr++;
        console.log(x);
    }
}
pattern();