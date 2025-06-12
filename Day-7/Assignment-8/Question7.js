//Find Error in below questions and rectify them

// 7. for (var i = 0; i < 10; i++) {
// setTimeout(function() { console.log(i); }, 1000); }


for (let i = 0; i < 10; i++) { // used let instead of var as var was getting hoisted
    
    setTimeout(function() { console.log(i); }, 1000); 
}
