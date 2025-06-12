// Find Error in below questions and rectify them



// var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
// var getPersonDetails = person.getDetails;
// getPersonDetails();



//Here the getPersonDetails was being called that was not a function 
//rather person.getDatails should be called while referencing to call the function. 
var person = { name: "John Doe", age: 30, getDetails: function() { console.log(this.name + " is " + this.age + " years old"); } };
var getPersonDetails = person.getDetails();
getPersonDetails;


