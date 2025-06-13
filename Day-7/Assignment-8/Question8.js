//Find Error in below questions and rectify them


// function Person(name, age) { this.name = name; this.age = age; }

// Person.prototype.getDetails = function() {
//    console.log(this.name + " is " + this.age + " years old");
// };

// var person = new Person("John Doe", 30);
// delete person.name;
// person.getDetails();



function Person(name, age) { this.name = name; this.age = age; }

Person.prototype.getDetails = function() {
   console.log(this.name + " is " + this.age + " years old");
};

var person = new Person("John Doe", 30);
//Person name was being deleted before accessing that caused name to be undefined in output
person.getDetails();