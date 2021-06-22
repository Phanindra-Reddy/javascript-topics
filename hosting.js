console.log('-------------  Hoisting in Javascipt  ---------------');

// getFun(); // hello, i'm getFun
// console.log(a); // undefined

// console.log(getFun); // ƒ getFun(){ console.log("hello, i'm getFun") };

// var a=8;

// function getFun(){
//     console.log("hello, i'm getFun")
// }

function getWeather(){
    var url ="http://api.openweathermap.org/data/2.5/forecast?q=Hyderabad&units=imperial&APPID=d055ded8da2a06b0617f888ee4e903a6";
    console.log(JSON.stringify(url.id));
}
getWeather();
