var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var bt = document.getElementsByClassName("liBtn");
var btn = document.getElementById('btn')

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");//I added some lines 
	//var libtn = document.createElement("button");
	//libtn.appendChild(document.createTextNode("delete"))
	//li.appendChild(libtn); I later discovered that it is first things first
	var libtn = document.createElement('button');
	libtn.appendChild(document.createTextNode(" delete"));
	li.appendChild(document.createTextNode(input.value + '   there '))//,libtn); this doesnt work why?
	//var libtn = document.createElement('bt');
	//libtn.appendChild(document.createTextNode(" delete"));
	li.appendChild(libtn);
	ul.appendChild(li);
	input.value = "";
	
}
//I added this function below
function del(){
	var ul = document.getElementById('liCnt');
	var l2 = document.getElementById('btl')
  ul.removeChild(l2);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick);
bt[1].addEventListener("click", del);
input.addEventListener("keypress", addListAfterKeypress);