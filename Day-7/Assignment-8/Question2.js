// 2. let myObject = { name: 'John', age: 30 };
// for (property in myObject) {
//    console.log(property + ': ' + myObject.property);
// }



//Using obj.property here means trying to find the value that is not defined here obj[property] should be used to find the value for the given key (property)
let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject[property]); 
}