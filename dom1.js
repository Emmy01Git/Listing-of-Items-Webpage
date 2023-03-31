//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//header.style.borderBottom = 'solid 3px #000';

//GETELEMENTSBYCLASSNAME
var items = document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor = 'green';
//items[2].textContent = "Changed Name";
//items[2].style.fontWeight = 'bold';
 
for(var i = 0; i < items.length; i++){
    items[i].style.fontWeight = 'bold';
}

var item = document.querySelector('.list-group-item');
//item.style.color = 'green';

for(var i = 0; i < items.length; i++){
    items[i].style.color = 'yellow';
}