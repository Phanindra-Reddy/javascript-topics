//console.dir(document);


// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title="phanindra";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);


// <---------------GETELEMENTBYID--------------------->
// var ele1=document.getElementById('header-title');
// console.log(ele1);
// ele1.innerHTML='<h3>Phanindra</h3>';
// ele1.style.borderBottom='solid 3px #fff';


// <---------------GETELEMENTBYCLASSNAME-------------->

// var item=document.getElementsByClassName('list-group-item');
// console.log(item);
// console.log(item[2]);
// item[2].textContent="Work on myProject";
// item[2].style.fontWeight='bold';
// item[2].style.backgroundColor='yellow';

// for(let i=0;i<item.length;i++){
//     item[i].style.backgroundColor='#f4f4f4';
// }

// <--------------GETELEMENTBYTAGNAME----------------->

// var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[2]);
// li[2].textContent="Work on myProject";
// li[2].style.fontWeight='bold';
// li[2].style.backgroundColor='yellow';

// for(let i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

// <------------QUERYSELECTOR------------------------->

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 3px #000';

// var input=document.querySelector('input');
// input.value="Prepare Documentation";
// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var items=document.querySelector('.list-group-item');
//items.style.backgroundColor='yellow';

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.backgroundColor='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.backgroundColor='green';

// <-----------QUERYSELECTORALL------------------------>

// var titles=document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent="ADD ITEMS";
// titles[1].textContent='ITEMS';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(let i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor="Yellow";
//     even[i].style.backgroundColor="blue";

// }

// <----------TRAVERSING THE DOM-------------------->

//var itemList=document.querySelector('#items');

//---------ParentNode----------
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='yellow';

//---------------ParentElement-------------

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='blue';

// //-----------------ChildNode--------------------
// console.log(itemList.childNodes);
// itemList.childNodes.style.backgroundColor='yelllow';
// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[3].style.backgroundColor='yellow';

//----firstElementChild & lastElementChild-----------
// itemList.firstElementChild.textContent='Products';
// itemList.lastElementChild.textContent="Hyderabad";

//----nextElementSibling & previousElementSibling--------
// itemList.nextElementSibling.textContent='hello';
// itemList.previousElementSibling.textContent='hii world';
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);

//------------------createElement----------------------
// i) creating a new div

// var newDiv=document.createElement('div');

// //Add Class
// newDiv.className='new-class';

// //Add id
// newDiv.id="new-id"

// //setAttibute
// newDiv.setAttribute('title', 'hello');

// // create text node
// let newDivText=document.createTextNode('Hello World!');

// //append to div
// newDiv.appendChild(newDivText);

// newDiv.style.fontSize='30px';

// var container=document.querySelector('header .container');
// var h1=document.querySelector('header h1');
// container.insertBefore(newDiv, h1);

// var btn=document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(){
//     console.log("button is clicked!!");
//     document.getElementById('header-title').textContent="COUNTER APP";
//     document.getElementById('main').style.backgroundColor='yellow';
// }
// var output=document.getElementById('output');
// var main=document.getElementById('main');
// var box=document.getElementById('box');
// var body=document.querySelector('body');

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);
//  box.addEventListener('mousemove', runEvent);

// function runEvent(e){
//     console.log('EVENT TYPE : '+e.type);
//     output.innerHTML= '<h3>Mouse X : '+e.offsetX+'</h3> <h3>Mouse Y : '+e.offsetY+'</h3>';
//     box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",50)";
//     body.style.backgroundColor="rgb("+e.offsetY+","+e.offsetX+",50)";
//     main.style.backgroundColor="rgb(45,"+e.offsetX+","+e.offsetY+")"; 
// }


//<-------------------------------------Project----------------------------------------->


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem); 
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
  
  document.getElementById('addForm').reset();
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
}
  
// Seach or Filter Items
function filterItems(e){
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
}








