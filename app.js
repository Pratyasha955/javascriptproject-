// //getElementById
// var page=document.getElementById("main-header");
// page.style.borderBottom="solid 3px #000";
// var pagelog=document.getElementById("text");
// pagelog.style.fontWeight = 'bold';
// pagelog.style.color = 'green';

// //getElementByClassName
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[2]);
// items[2].style.backgroundColor ='green';
// items[2].textContent ='Hello';

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight ='bold';
// }
// var  items1= document.getElementsByClassName('list');
// console.log(items1);
// items1[0].style.backgroundColor='yellow';
// items1[0].style.fontWeight='bold';

// //getelementbytagname
// var items2=document.getElementsByTagName("li");
// console.log(items2);
// items2[0].textContent="Hello";
// items2[1].style.backgroundColor='green';
// for(let i=0;i<items2.length;i++){
//     items2[i].style.fontWeight='bold';
// }

// //QuerySelector 

// var iteams3=document.querySelector('.list-group-item:nth-child(2)');
// iteams3.style.backgroundColor='green';

// var iteams4=document.querySelector('.list-group-item:nth-child(3)');
// iteams4.style.display='none';

// //QuerySelectorALL
// var titels1=document.querySelectorAll('li');
// titels1[1].style.color='green';
// var titels2=document.querySelectorAll('.list-group-item:nth-child(odd)');
// for(let i=0;i<titels2.length;i++){
// titels2[i].style.backgroundColor='green';
// }

// 


// //par//TRAVERSING THE DOM
// var itemList = document.querySelector('#items');anetNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'lightgreen';
// console.log(itemList.parentNode.parentNode.parentNode);

// //ParentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'yellow';
// console.log(itemList.parentElement.parentElement.parentElement);

// //childeNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'lightpink';

// //FirstChild
// console.log(itemList.firstChild);
// //FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'AddHello';

// //nextsibling
// console.log(itemList.nextSibling);
// //nextelementsibling
// console.log(itemList.nextElementSibling);

// //previous
 //console.log(itemList.previous);
// //previousElementSibling
//console.log(itemList.previousElementSibling);
 //itemList.previousElementSibling.style.color = 'green';


//  //createElement
//  var newDiv = document.createElement('div');
//  // Add Class
//  newDiv.className = 'hiipooja';
//  //Add Id
//  newDiv.id ='hiiashu' ;
//  //Add attribute
//  newDiv.setAttribute ('tittle','hello div');
// // create text node
// var newDivText = document.createTextNode('ADDHello');

// // Add text to div
// newDiv.appendChild(newDivText);
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Add item
function addItem(e) {
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // Create Edit button element
    var editBtn = document.createElement('button');
    // Add classes to Edit button
    editBtn.className = 'btn btn-info btn-sm float-right edit';
    // Add left margin to the Edit button
    editBtn.style.marginLeft = '5px'
    // Append text node
    editBtn.appendChild(document.createTextNode('Edit'));

    // Create del button element
    var deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));


    // Append button to li
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
}

// Remove item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are You Sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
