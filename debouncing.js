//html code for debounce

//   <input type="text" id="input" onkeyup="betterFunction()">

//---- debounce in javascript----------

let counter = 0;
const getData = () => {
  console.log("Fetching Data ..", counter++);
}


function debounce(fn, delay){
    let timer;
    return function(){
        let context = this,
            args = arguments;
        clearInterval(timer);
        timer  = setTimeout(()=>{
            fn.apply(context,arguments)
        },delay)
    }
}

const betterFunction = debounce(getData, 300);

