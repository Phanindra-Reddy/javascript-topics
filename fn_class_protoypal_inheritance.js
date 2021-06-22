// Functions Prototypal Inheritance

function Fruit(fruit_name){
    this.fruit_name = fruit_name;
    this.color = "Yellow";
    this.getInfo = function(){
        console.log(`${this.fruit_name} is ${this.color} in Color.`);
    }
}

var obj = new Fruit('Mango');
obj.getInfo();

// Prototypal Inheritance

function Fruit1(fruit_name){
    this.fruit_name = fruit_name;
    this.color = "Red";
}

Fruit1.prototype.getInfo = function(){
    console.log(`${this.fruit_name} is ${this.color} in Color.`);
}

var obj = new Fruit1('Apple');
obj.getInfo();

//Class Prototypal Inheitance

