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


 //createElement
 var newDiv = document.createElement('div');
 // Add Class
 newDiv.className = 'hiipooja';
 //Add Id
 newDiv.id ='hiiashu' ;
 //Add attribute
 newDiv.setAttribute ('tittle','hello div');
// create text node
var newDivText = document.createTextNode('ADDHello');

// Add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);