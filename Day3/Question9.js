let first = 0;
let second = 1;
let n=10;
console.log(first);
console.log(second);
for(let i=3;i<=n;i++){
    let temp=second;
    second=second+first;
    first=temp;
    console.log(second);

}