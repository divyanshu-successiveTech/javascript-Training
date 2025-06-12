// c4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
// Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.


class Person{
    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }

    fullname(){
        console.log(`${this.firstname } ${this.lastname} `);
    }

    // getAverage(arr){
    //     let sum=0;
    //     for(let i=0;i<arr.length;i++){
            
    //         sum += arr[i].age;
    //     }
    //     return sum/arr.length;

    // }

    getAverage(arr){
        
        return arr.reduce((a,b)=>a+b.age,0)/arr.length;
    }

}


// //Method-1
// arr=[];
// for(let i=0;i<10;i++){
//     const p1= new Person("John","Doe",20+i);
//     arr.push(p1);
// }

const p= new Person("John","Doe",20);
const p1= new Person("Divyanshu","Bhardwaj",40);


arr =[p,p1];

p.fullname();

console.log(p.getAverage(arr));



