class Area 
{
    constructor(x, y = 0) {
      this.x = x;
      this.y = y;
  
    }
    Circle() {
      let area1 = 3.1454 * this.x * this.x ;
      return area1;
    }
    Square() {
      let area2 = this.x * this.x ;
      return area2;
    }
    Rectangle() {
      let area3 =  this.x * this.y ;
      return area3;
    }
  }
  
  let CircleObj = new Area(3);
  console.log("Area of cirlce: " + CircleObj.Circle());

  let SquareObj = new Area(5);
  console.log("Area of Square: " + SquareObj.Square());

  let RectangleObj = new Area(2,3);
  console.log("Area of Refctangle: " + RectangleObj.Rectangle());
