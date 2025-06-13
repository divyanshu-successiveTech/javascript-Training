// 2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.



class Shape{

  constructor(width,height){
      this.width=width;
      this.height=height; 
  }
  
  getArea(){
    
  }
}




class Rectangle extends Shape {

  constructor(width, height) {
    super(width, height);
  }


  getArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape{
  constructor(height,base){
    super(height, base);
    this.base = base;
  }

  getArea(){
    console.log(this.height);
    // console.log(this.base);
    return 0.5 * this.height * this.base;
  }
}

// const rect = new Rectangle(4,5);
const tri = new Triangle(3,3);


// console.log(rect.getArea());

console.log(tri.getArea());
