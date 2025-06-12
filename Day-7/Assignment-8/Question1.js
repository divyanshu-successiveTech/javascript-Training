// Find Error in below questions and rectify them




// 1. let myArray = [1, 2, 3, 4];
// for (let i = 0; i <= myArray.length; i++) {
//    console.log(myArray[i]);
// }

let myArray = [1, 2, 3, 4];
for (let i = 0; i <myArray.length; i++) {//The loop was running till index arr.length(4 in this case) which causes the output to be undefined.
   console.log(myArray[i]);
}