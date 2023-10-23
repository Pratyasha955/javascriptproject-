// //getElementById
// var page=document.getElementById("main-header");
// page.style.borderBottom="solid 3px #000";
// var pagelog=document.getElementById("text");
// pagelog.style.fontWeight = 'bold';
// pagelog.style.color = 'green';

//getElementByClassName
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].style.backgroundColor ='green';
items[2].textContent ='Hello';

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight ='bold';
}