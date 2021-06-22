// ----------------15 must-know JavaScript array methods in 2020-------------------------

// ------------------------------------1.Some()-----------------------------------

// const myAwesomeArray=['a','b','c','d','e'];
// let res=myAwesomeArray.some(test=>test==='b');
// console.log(res);

// ------------------------------------2.reduce()----------------------------------

// var numArr = [
//     {  name: 'a', num: 50},
//     {  name: 'b', num: 50},
//     {  name: 'c', num: 75},
//     {  name: 'd', num: 35},
//     {  name: 'e', num: 25 },
//     {  name: 'f', num: 40 },
// ];

// var sum = numArr.reduce((total, currentValue) =>{return total + currentValue.num},0);

// document.write( "javascript- Sum of the array value is :- " + sum );

// const myArray=[1,2,3,4,5];
// let res=myArray.reduce((total,value)=>total*value);
// console.log(res);

// ---------------------------------------3.every()-----------------------------------

// var nums = [3, 18, 19, 20, 25];

// var res=nums.every(test=>test > 3)

// document.write(res);

// -----------------------------------------4.map()-------------------------------------

// var numbers = [4, 9, 16, 25];
// var x = numbers.map(Math.sqrt);
// var y= numbers.map(x=>x*2);
// document.write(x);

// document.write(y);

// ------------------------------------------5.flat()--------------------------------------

// const myAwesomeArray = [[1, 2, 3], [4, 5], 6]

// let x=myAwesomeArray.flat();
// console.log(x);

// -------------------------------------------6.filter()--------------------------------------

// const myAwesomeArray = [
//     { id: 1, name: "john" },
//     { id: 2, name: "Ali" },
//     { id: 3, name: "Mass" },
//     { id: 3, name: "phani" },
//     { id: 4, name: "Mass" },
//   ]
  
//   let x=myAwesomeArray.filter(element => element.name==="Mass")
//   console.log(x);

//   var filter = [10, 5, 16, 4, 7, 12].filter(x=>x<10);

//    console.log(filter);

// ---------------------------------------------7.forEach()-----------------------------------

const myAwesomeArray = [
    { id: 1, name: "john" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Mass" },
  ];
  
  let x=myAwesomeArray.forEach(element => document.writeln(element.name));
  console.log(x);

//   var num = [18, 12, 10, 15].forEach((item) =>{document.writeln(item)});
//   console.log(num);

// ------------------------------------------8.findIndex() and 9.find()------------------------------------

//   const myAwesomeArray = [
//     { id: 1, name: "john" },
//     { id: 2, name: "Ali" },
//     { id: 3, name: "Mass" },
//   ]
  
//   let x=myAwesomeArray.findIndex(element => element.id === 3);//it will return the first index of test condition
//   console.log(x);

//   let y=myAwesomeArray.find(element => element.id === 3);
//   console.log(y); // returns first element of test condition

// function isCheck(value) {
//     return value >10;
//   }
  
//   var find= [10, 5, 16, 4, 7, 12].find(isCheck);
//   console.log(find);

// ----------------------------------------10.sort()----------------------------------------

// const myAwesomeArray = [5, 4, 3, 2, 1]

// // Sort from smallest to largest
// myAwesomeArray.sort((a, b) => a - b);
// //-------> Output : [1, 2, 3, 4, 5]

// // Sort from largest to smallest
// myAwesomeArray.sort((a, b) => b - a);
// //-------> Output : [5, 4, 3, 2, 1]

// var lang = ["php", "python", "java", "C"].sort();
// console.log(lang);

// -------------------------------------------11.concat()-----------------------------------

// var lang = ["PHP", "Python", "Java", "C"];  
// var newlang = ["JavaScript", "Rust"];  
// var join = lang.concat(newlang); 
// console.log(join);

//----------------------------------------------12.fill()----------------------------------

// const myAwesomeArray = [1, 2, 3, 4, 5]

// // The first argument (0) is the value
// // The second argument (1) is the starting index
// // The third argument (3) is the ending index
// let x=myAwesomeArray.fill(0, 1, 3);
// //-------> Output : [1, 0, 0, 4, 5]
// console.log(x);

//-----------------------------------------------13.includes()-------------------------------
// const myAwesomeArray = [1, 2, 3, 4, 5]

// let x=myAwesomeArray.includes(3)

// let y=myAwesomeArray.includes(8)

// console.log(x);
// console.log(y);

//------------------------------------------------14.reverse()-------------------------------

// const myAwesomeArray = ["e", "d", "c", "b", "a"]

// myAwesomeArray.reverse()
// //-------> Output : ['a', 'b', 'c', 'd', 'e']

//------------------------------------------------15.flatMap()-------------------------------

// const myAwesomeArray = [[1], [2], [3], [4], [5]]

// let x=myAwesomeArray.flatMap(arr => arr * 10);
// //-------> Output : [10, 20, 30, 40, 50]
// console.log(x);

// // With .flat() and .map()
// myAwesomeArray.flat().map(arr => arr * 10)
// //-------> Output : [10, 20, 30, 40, 50]

//------------------------------------------16.spilce()---------------

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(2, 2,'phani','ravi','rahul');
// console.log(months);

//-------------------------------17.slice()------------------------------

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(animals.slice(2));
// console.log(animals.slice(2,4));
// console.log(animals.slice(1,5));

//----------------------------------18.indexOf()---------------------------------

// var txt = "Lets find where 'pen' occurs!";
// var test = txt.indexOf("pen");
// console.log(test);

//-----------------------------------19.substring()---------------------------------


//-----------------------------------20.substr()------------------------------------
//-----------------------------------21.replace()------------------------------------




