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

//QuerySelectorALL
var titels1=document.querySelectorAll('li');
titels1[1].style.color='green';
var titels2=document.querySelectorAll('.list-group-item:nth-child(odd)');
for(let i=0;i<titels2.length;i++){
titels2[i].style.backgroundColor='green';
}