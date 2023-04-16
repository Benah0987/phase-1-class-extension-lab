// Your code here
class Polygon {
    constructor(sides) {
        this.sides = sides;

    }
    //get method to count sides
    get countSides() {
        //used the .length property to get array
        return this.sides.length
    }
    //method perimeter
    perimeter() {
        //used the reduce method to go through the 
        //array and add up
        return this.sides.reduce((sum, side) => sum + side, 0);
    }
}

//defining a triangle
//inherits from the polygon class
class Triangle extends Polygon {
    //rep the parent class
    constructor(sides) {
        super(sides);
    }

    //get method isValid
    //checks if the given 3 sides for a triangle is valid
    get isValid(){
        //used the destructure to assign
        count [a,b,c] = this.sides;
        //checks if the sum of two sides is greater than 
        //the third side
        return  (a + b > c) && (b + c > a) && (c + a > b);
        //returns true or false

    }

}

