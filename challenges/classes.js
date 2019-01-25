// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(length, width, height){
//     this.length = length,
//     this.width = width,
//     this.height = height
// }

// CuboidMaker.prototype.volume = function(){ return this.length * this.width * this.height};

// CuboidMaker.prototype.surfaceArea = function(){ return 2 * (this.length * this.width + this.length * this.height + this.width * this.height)};

// const cuboid = new CuboidMaker(4, 5, 5);

class CuboidMaker {
    constructor(length, width, height){
        this.length = length,
        this.width = width,
        this.height = height
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker(4, 5, 5);


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  
// Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(side){
        super(side),
        this.side = side
    }
    volume(){
        return Math.pow(this.side, 3);
    }
    surfaceArea(){
        return 6*Math.pow(this.side, 2);
    }
}

const Cube = new CubeMaker(2);

console.log(Cube.volume()); // 
console.log(Cube.surfaceArea()); // 
