
// This is basics of call(), apply(), bind() methods along with polyfill for bind()

var obj1 ={
    firstName : "Phanindra",
    lastName : "Reddy"
}

var obj2 ={
    firstName : "Ravindra Reddy",
    lastName : "Maram"
}

let fullName = function(city,subject){
    console.log(`I'm ${this.firstName} ${this.lastName} and i'm from ${city}, i like ${subject}!!`);
}

//-------------call(this_context, arg1, ag2,...)------------------

//let details1 = fullName.call(obj1,'warangal','computers');
//let details2 = fullName.call(obj2,'Hyderabad');

//------------ apply(this_context, [arg1, ag2,...])---------------

//let details3 = fullName.apply(obj1, ['warangal','computers']);

//----------------bind()---------------------

//let details4 = fullName.bind(obj1)
//console.log(details4('warangal','computers'));


//-------------Polyfill for bind----------------

Function.prototype.myBind = function(...args){
    var obj = this;
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0],[...params,...args2]);
    }
}

let details5 = fullName.myBind(obj1);
details5('warangal','computers');




