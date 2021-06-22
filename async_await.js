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
//                 resolve();
//             }else{
//                 reject('Something is worng');
//             }
//        },2000);
//     });
    
//   }

//   async function init(){
//     await createPost({title:'post three',body:'this is post three'});
//     getPosts();
//   }
//   init();

// which resolves to "MESSAGE" after 2 seconds.

// function getMessage() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve("MESSAGE"), 4000);
//     });
//   }
//   async function start() {
//     const message = await getMessage();
//     return `The message is: ${message}`;
//   }
//   start().then(msg => console.log(msg));

// async function tryToFetch() {
//     try {
//       const response = await fetch('/api/data', options);
//       return response.json();
//     } catch(err) {
//       console.log(`An error occured: ${err}`);
//       // Instead of rethrowing the error
//       // Let's return a regular object with no data
//       return { data: [] };
//     }
//   }
//   tryToFetch().then(data => console.log(data));

async function firstAsync(){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("Done!!"),1000);
    })
    let result=await promise;
        console.log(result);
}
firstAsync();