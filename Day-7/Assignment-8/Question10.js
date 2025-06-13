// Find Error in below questions and rectify them



// 10.function getData(callback) {
//    setTimeout(function() { callback([1, 2, 3, 4, 5]); }, 1000);
// }
// getData(function(data) {
//    console.log(data.length);
// });





//Made the function to print the array values as the function says getData
function getData(callback) {
   setTimeout(function() { 
    callback([1, 2, 3, 4, 5]); }, 1000);
}
getData(function(data) {
   console.log("The length is " + data.length);

   for(const c of data){
    console.log(c)
   }

});

