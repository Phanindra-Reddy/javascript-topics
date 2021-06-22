/* const Circle={
    radius:1,
    location:{
        x:1,
        y:1
    }
};
function createcircle(radius){
    return{
        draw:function(){
            console.log("draw");
        }
    };
}

const circle=new createcircle(1);
circle.draw(); */

// function's are Objects

/* function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.drwa("draw");
    }
}

const Circle1= new Function('radius',`this.radius=radius;
this.draw=function(){
    console.log("drwa");
}`);

const circle=new Circle(1);
const another = new Circle(1);

function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log("draw");
    }
}
const circle=new Circle(10);
for(let key in circle){
    if(typeof circle[key]!='function')
     console.log(key, circle[key]);
}

const keys=Object.keys(circle);
console.log(keys);
if('radius' in circle){
console.log('circle has a radius');
} 

function Dog(name) {
    this.name = name; 
  }
  
  // Modify the code below this line
  Dog.prototype = {
    //constructor:Dog,
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom"); 
    }, 
    describe: function() {
      console.log("My name is " + this.name); 
    }
  }; */

  