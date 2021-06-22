
function getData(){
    console.log('btn clicked');
}

// function throttle(fn,limit){
//     let flag = true;
//     return function(){
//         let context = this,
//             args = arguments;
//         if(flag){
//             fn.apply(context,arguments);
//             flag = false;
//             setTimeout(()=>{
//                 flag = true;
//             },limit)
//         }
//     }
// }

function throttle(fn,limit){
    let time=0;
    return function(...args){
        let now = new Date().getTime();
        if(now - time <= limit) return;
        time = now;
        fn(...args);
    }
}


let betterThrottle = throttle(getData,300);

