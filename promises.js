// let posts=[
//     {title:'post one', body:'this is post one.'},
//     {title:'post two', body:'this is post two.'}
//   ];

//   function getPosts(){
//     setTimeout(()=>{
//        let output='';
//        posts.forEach((post,index)=>{
//             output += `<li>${post.title}</li>`;
//        });
//        document.body.innerHTML=output;
//     },1000);
//   }

//   function createPost(post){
//       return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post);

//             const error=true;
//             if(!error){
//                 resolve('');
//             }else{
//                 reject('Error:Something is wrong');
//             }
//        },2000);
//     });
    
//   }

// createPost({title:'post three',body:'this is post three'})
// .then(getPosts)
// .catch(err=>console.log(err));

// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("got the user");
//            //resolve({user:"phani"});
//            reject(new Error("user not logged in"));
//     },2000);
// });

// promise.then((user)=>{
//     console.log("success");
// }).catch((err)=>{console.log(err.message)});

// let promise = new Promise((resolve,reject)=>{
//      let isClean = false;

//      if(isClean){
//          resolve('Clean');
//      }else{
//          reject("not clean!!");
//      }
// });

// promise.then((a)=>{
//     console.log('the room is ' + a);
// }).catch((b)=>{
//     console.log(b);
// })

let cleanRoom = function() {
    return new Promise(function(resolve, reject) {
      resolve('Cleaned The Room');
    });
  };
  
  let removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
      resolve(message + ', remove Garbage');
    });
  };
  
  let winIcecream = function(message) {
    return new Promise(function(resolve, reject) {
      resolve( message + ', won Icecream.');
    });
  };
  
//   cleanRoom().then(function(result){
//       return removeGarbage(result);
//   }).then(function(result){
//       return winIcecream(result);
//   }).then(function(result){
//       console.log('finished, ' + result);
//   })

Promise.race([cleanRoom(), removeGarbage(), winIcecream()]).then((result)=>{
    console.log("all finished "+result);
});

