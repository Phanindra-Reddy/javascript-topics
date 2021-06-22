  // const second = () => {
  //   console.log('Hello there!');
  // }
  // const first = () => {
  //   console.log('Hi there!');
  //   second();
  //   console.log('The End');
  // }
  // first(); 
  // setTimeout(()=>console.log("tick"),3000);

//    let posts=[
//      {title:'post one', body:'this is post one.'},
//      {title:'post two', body:'this is post two.'}
//    ];

//    function getPosts(){
//      setTimeout(()=>{
//         let output='';
//         posts.forEach((post,index)=>{
//              output += `<li key=${index}>${post.title}</li>`;
//         });
//         document.body.innerHTML=output;
//      },1000);
//    }

//    function createPost(post,callback){
//      setTimeout(()=>{
//           posts.push(post);
//           callback();
//      },3000);
//    }
// createPost({title:'post three', body:'this is post three'},getPosts);

//  console.log("Start");
 
//  function getUserDetails(email,password,callback){
//    setTimeout(()=>{
//     console.log("now we have some data!"); 
//     callback({userEmail:email});
//     },2000);
//  }
//  var user=getUserDetails("info.phanindra@gmail.com",123456,(user)=>{
//   console.log(user);
//  });
//  console.log("Finish");

// const students=[
//   {name:"Phani", subject:"Python"},
//   {name:"Ravi", subject:"JavaScript"}
// ]

// function enrollStudent(student,callback){
//   setTimeout(()=>{
//       students.push(student);
//       callback();
//   },1000);
// }

// function getStudents(){
//   setTimeout(()=>{
//     let str='';
//     students.forEach((student)=>{
//       str+=`<li>${student.name}</li>`;
//     });
//     document.body.innerHTML=str;
//     console.log(str);
//   },3000);
// }

// let s1={name:"Vishu", subject:"Java"};
// enrollStudent(s1,getStudents);
// getStudents()

class MatrixIterator {
  constructor(matrix) {
  this.x = 0;
  this.y = 0;
  this.matrix = matrix;
  }
  next() {
  if (this.y == this.matrix.height) return {done: true};
  let value = {x: this.x,
  y: this.y,
  value: this.matrix.get(this.x, this.y)};
  this.x++;
  if (this.x == this.matrix.width) {
  this.x = 0;
  this.y++;
}
return {value, done: false};
}
}
let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
for (let {x, y, value} of matrix) {
console.log(x, y, value);
}

// const x=function(){
//   console.log("This is the outer 'x' function");
// }

// const y=function(callback){
//   console.log('This is the y function');
//   callback();
// }

// y(x);



