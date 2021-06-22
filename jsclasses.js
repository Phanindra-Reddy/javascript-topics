// // 1.Introduction to classes

// class Employee{
// 	constructor(Empname,rollno,address){
//          this.Empname=Empname;
//          this.rollno=rollno;
//          this.address=address;
// 	}
// 	getDetails(){
// 		console.log(`my name is ${this.Empname}, and i'm from ${this.address}. my rollno is ${this.rollno}`);
// 	}
// }

// let emp1=new Employee('phani',516,'HNK');
// let emp2=new Employee('ravindra',516,'wgl');

// // emp1.getDetails();
// // emp2.getDetails();

// // 2.Getters & Setters
 
//   /* class Square{
//    	constructor(width){
//    		this.width=width;
//    		this.height=width;
//    	}
//    	get area(){
//    		return this.width*this.height;
//    	}

//    	set area (area){
//    		this.width=Math.sqrt(area);
//    		this.height=this.width;

//    	}


//    }

//    let square1=new Square();
//    square1.area=81;
//    // console.log(square1.width);
//    // console.log(square1.height); */

// // 3.Static Methods 
  
// class Square3{
//    	constructor(width){
//    		this.width=width;
//    		this.height=width;
//    	}
   	
//     static equals(a,b){
//     	 return a.width*a.height===b.width*b.height;
//     }
//     static isValidDimensions(width,height){
//          return width===height;
//     }
   

// }

//    let square1=new Square3(3);
//    let square2=new Square3(4);

//   console.log(Square3.equals(square1, square2));//true
//   console.log(Square3.isValidDimensions(6,16));//false 

//  // 4.Inheritence and Extends

  class Person{
  	constructor(name,age){
  		this.name=name;
  		this.age=age;
  	}

  	describe(){
  		console.log(`I am ${this.name} and I am ${this.age} years old.`);
  	}
  }

  class Programmer extends Person {
      constructor(name,age,yearsOfExperience){
         super(name,age);
         this.yearsOfExperience=yearsOfExperience;
      }

      code(){
      	console.log(`${this.name} is coding.`);
      }
  }

  Programmer.prototype.canCode=function(){
      console.log(`${this.name} can do coding in multiple languages with ${this.yearsOfExperience} years of experience`);
  }

  const Programmers=[
   new Programmer("Phani",56,12),
   new Programmer("Ravi",24,4)
  ];

  function developSoftware(Programmers){
      for(let Programmer of Programmers){
        Programmer.code();
      	Programmer.canCode();
      }
  }

 developSoftware(Programmers);


 //------------------Prototype-----------------   


