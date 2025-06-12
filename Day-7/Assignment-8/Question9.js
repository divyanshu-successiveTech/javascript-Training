// function Person(name, age) { this.name = name; this.age = age; }

// var person = Person("John Doe", 30);

// console.log(person.name);



function Person(name, age) { this.name = name; this.age = age; }

var person = new Person("John Doe", 30);//Not used new keyword so,unable to create a new object 

console.log(person.name);

