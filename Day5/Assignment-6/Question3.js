// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.
// 3.2 Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.
// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.


class Person {
    constructor(name,age,gender,interest){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.interest=interest;
        
    }

    greet(){
        console.log(`The name of person is ${this.name}`);
    }

    farewell(){
        console.log(`Good bye to ${this.name}`);
    }
}
arr=["travel","sports"]
const now = new Person("Rai",20,"Male",arr);
now.greet();
now.farewell();

class Student extends Person {

    constructor(studies){
        
        super();
        this.studies = studies;
    }

    greet(){
        console.log(`The student is studying ${this.studies}`);
    }
}

const stu = new Student("Maths");

stu.greet();

class Teacher extends Person{
    constructor(teach){
        super();
        this.teach=teach;
    }

    farewell(){
        console.log(`The teacher use to teach ${this.teach}`);
    }
}

const teaching = new Teacher("science");
teaching.farewell();
