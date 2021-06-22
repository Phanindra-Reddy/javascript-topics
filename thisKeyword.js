// The JavaScript `this` Keyword + 5 Key Binding Rules Explained for JS Beginners

// 1. Implicit Binding

    // Ex-1: 
    let user1 = {
        name: 'Phanindra',
        address: 'freecodecamp',
        getName: function() {
            //console.log(this.name); // Phanindra
        }
    };
    
    user1.getName() // here "this" refer to user object because LHS of dot(.) operator is user.

    // Ex-2:
    function decorateLogName(obj) {
        obj.logName = function() {
            //console.log(this.name); // tom, jerry
        }
    };
  
    let tom = {
        name: 'Tom',
        age: 7
    };
  
    let jerry = {
        name: 'jerry',
        age: 3
    };
  
    decorateLogName(tom);
    decorateLogName(jerry);
  
    tom.logName(); // here "this" refer to tom object because LHS of dot(.) operator is user.
    jerry.logName(); // here "this" refer to jerry object because LHS of dot(.) operator is user.

// 2. Explicit Binding

    // Ex-1: call()
    let getName1 = function() {
        //console.log(this.name);
    }
    
   let user2 = {
      name: 'Tapas',
      address: 'Freecodecamp'  
    };
   
   getName1.call(user2);

   //Ex-2: apply()
   let getName2 = function(hobby1, hobby2) {
        //console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
    }

    let user3 = {
        name: 'Tapas',
        address: 'Bangalore'  
    };

    let hobbies1 = ['Swimming', 'Blogging'];

    getName2.apply(user3, hobbies1);

    //Ex-3: bind()
    let getName3 = function(hobby1, hobby2) {
        //console.log(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
    }
   
   let user4 = {
      name: 'Tapas',
      address: 'Bangalore'  
    };
   
   let hobbies2 = ['Swimming', 'Blogging'];
   let newFn = getName3.bind(user4, hobbies2[0], hobbies2[1]); 
   
   newFn()

   //Ex-4:
   function foo() {
        // return an arrow function
        return (a) => {
        // `this` here is lexically adopted from `foo()`
            console.log( this.a );
        };
    }
    var obj1 = {
        a: 2
    };
    var obj2 = {
        a: 3
    };
    var bar = foo.call( obj1 );
    bar.call( obj2 ); // 2, not 3!


// 3. new Binding

    // Ex-1:
    let Cartoon = function(name, character) {
        this.name = name;
        this.character = character;
        this.log = function() {
            console.log(this.name +  ' is a ' + this.character);
        }
    };

    let tom1 = new Cartoon('Tom', 'Cat');
    let jerry1 = new Cartoon('Jerry', 'Mouse');
    tom1.log();


// 4. Lexical Binding

    // Ex-1:
    function outer(){
        var b = 10;
        function inner(){
            let b = 20;
            console.log(b,this);
        }
        inner();
    }
    outer();


// 5. Global Binding

    // Ex-1:
    let sayName = function(name) {
        console.log(this.name);
    };
    
    window.name = 'Phanindra';
    sayName();


// 6. Default Binding

    //Ex-1:
    function myFunction() {
        console.log(this)
    }
    myFunction();

