// Find Error in below questions and rectify them



// 11. var promise = new Promise(function(resolve, reject) {
//    setTimeout(function() { resolve("Data received"); }, 1000);
// });
// promise.then(function(data) {
//    console.log(data);
// }, function(error) {
//    console.log(error);
// });


//No error 
var promise = new Promise(function(resolve, reject) {
   setTimeout(function() { resolve("Data received"); }, 1000);
});
promise.then(function(data) {
   console.log(data);
}, function(error) {
   console.log(error);
});