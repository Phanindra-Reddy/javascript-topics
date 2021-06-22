const companies=[
   {name:"company one", category:"finance", start:1981, end:2003},
   {name:"company two", category:"retail", start:1992, end:2008},
   {name:"company three", category:"auto", start:1999, end:2007},
   {name:"company four", category:"retail", start:1989, end:2010},
   {name:"company five", category:"technology", start:2009, end:2014},
   {name:"company six", category:"finance", start:1987, end:2010},
   {name:"company seven", category:"auto", start:1986, end:1996},
   {name:"company eight", category:"technology", start:2011, end:2016},
   {name:"company nine", category:"retail", start:1981, end:1989}
];

const ages=[33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];


//forEach

  /*companies.forEach(function(com){
  	console.log(com);
  }

  	);

    



//filter
   /* let Array=[];
    for(i=0;i<ages.length;i++){
    	if(ages[i]>=21){
    		Array.push(ages[i]);
    	}
    }
    console.log(Array); 
     ------------------------------------
    let newArray=ages.filter( a => a>=31);
    console.log(newArray);     
    
    let array=companies.filter( a => (a.end-a.start>10));
    console.log(array);
  
     */
    


//map

   //const companyName=companies.map( com => {return `${com.name} [${com.start} - ${com.end}]`} );
    //console.log(companyName); 

    //const name=ages.map(age=>Math.sqrt(age)).map(age=>age*2).filter(age => age%2==0);

    //console.log(name)
   
//sort

    //const sorted=companies.sort( (c1,c2) =>  {(c1.start>c2.start)?1:-1} );
    	
    //console.log(sorted);

  
   //const sorted1=ages.sort((a,b)=>b-a);
   //console.log(sorted1);
//reduce

/*let ageSum=0;
for(let i=0;i<ages.length;i++){
   ageSum+=ages[i];
}

const ageSum=companies.reduce((total,company)=> total+(company.end-company.start), 1);

console.log(ageSum);

//-----combining all methods(map, filter, sort, reduce)-------------

const combine=ages
  .map(a=>a*2)
  .filter(a=>a>=40)
  .sort((a,b)=>a-b)
  .reduce((tot,ages)=>tot+ages,0);

console.log(combine);*/

