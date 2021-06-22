//Object Literals
/* const book1={
    title:'Book One',
    author:'phani',
    year:'2016',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

const book2={
    title:'Book Two',
    author:'Ravi',
    year:'2018',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));

console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2)); */

//Constructors

/*function Book(){
   // console.log('Book Initialized');
}
const book=new Book(); // Intialization of object

function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;

    this.getSummary=function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    } 
}

//for prototypes
Book.prototype.getSummary=function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

//setAge
Book.prototype.getAge=function(){
    const years=new Date().getFullYear()-this.year;
    return `${this.title} is ${years} years old.`;
}

//Revise or change year
Book.prototype.revise=function(newYear){
   this.year=newYear;
   this.revise=true;
}

const book1=new Book('Book One','phani','2016');
const book2=new Book('Book Two','ravi','2018');

console.log(book1);
book1.revise('2020');
console.log(book1); 

//Inheritance

function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
}

//for prototypes
Book.prototype.getSummary=function(){
    return `${this.title} was written by ${this.author} in ${this.year}`;
};

function Magazine(title,author,year,month){
    Book.call(this,title,author,year);
    this.month=month;
}
Magazine.prototype=Object.create(Book.prototype);

const mag1=new Magazine('Mag One','phani','2016','january');
const mag2=new Magazine('Mag Two','ravi','2018','march');

console.log(mag1);
console.log(mag1.getSummary()); 

//creating of objects

/*const bookProtos={
    getSummary:function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge:function(){
        const years=new Date().getFullYear()-this.year;
        return`${this.title} is ${years} years old.`;
    }
}

const book1=Object.create(bookProtos);
book1.title='Book One'; 
book1.author='phani';
book1.year='2018';
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());

const book2=Object.create(bookProtos,{
   title:{value:'Book Two'},
   author:{value:'phani'},
   year:{value:'2018'}
});
console.log(book2); */

//Classes

/* class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }


    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge(){
        const years=new Date().getFullYear()-this.year;
        return `${this.title} is ${years} years old.`;
    }

    revise(newYear){
        this.year=newYear;
        this.revised=true;
    }

    static topBookStore(){
        return 'Barner&Noble';
    }

}

const book1=new Book("Book One","phani","2018");
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
book1.revise('2020');
console.log(book1);

console.log(Book.topBookStore()); */

//Sub Classes

class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
}    

class Magazine extends Book{
    constructor(title,author,year,month){
        super(title,author,year);//inorder to call parent constructor
        this.month=month;
    }
} 

const mag1=new Magazine('mag one','phani','2018','january');
console.log(mag1);