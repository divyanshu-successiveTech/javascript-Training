//2. Write a program to display following output as shown in figure

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// 1
// 2 2
// 3 3 3
// 4 4 4 4

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5


pattern1 = (n) => {
    let curr = 1;
    for(let i = 1;i <= n;i++){
        let str = "";
        for(let j = 0;j < i;j++){            
            str += String(curr) + " ";
            curr++;
        }
        console.log(str);
    }
}

pattern2 = (n) => {
    for(let i = 1;i <= n;i++){
        let str = "";
        for(let j = 0;j < i;j++){
            str += String(i) + " ";            
        }
        console.log(str);
    }

}

pattern3 = (n) => {
    let curr = n;
    for(let i = curr;i >= 1;i--){
        let str = "";
        for(let j = 1 ;j <= curr;j++){
            str += j;
        }
        console.log(str);
        curr--;
    }
    curr+=2;
    for(let k = curr;k <= n;k++){
        let currStr = "";
        for(let x = 1;x <= curr ;x++){
            currStr += x;
        }
        console.log(currStr);
        curr++;
    }
    
}

pattern3(5)