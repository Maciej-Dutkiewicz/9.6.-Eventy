var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function(){
	var element = document.createElement('li');
	list.appendChild(element);
	element.innerHTML = 'item '+ (document.getElementsByTagName('li').length - 1);      
 })