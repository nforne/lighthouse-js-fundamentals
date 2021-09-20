// -------------------------------------------------

const sayHello = function() {
  alert("Hello");
}
setTimeout(sayHello, 3000);

// -------------------------------------------------

const sayHello = function() {
  alert("Hello");
}
const timer = setInterval(sayHello, 3000);

// -------------------------------------------------

const sayHello = function() {
  alert("Hello");
}
const timer = setInterval(sayHello, 3000);

clearInterval(timer);

// ------------------------------------------------

document.getElementById('identifier');
document.getElementsByTagName('p');
document.getElementsByClassName('class-name');

// ------------------------------------------------

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

/*
<!--HTML, CSS & JS-->

<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>

let elm = document.getElementById('info').textContent;
alert(elm);

let elm = document.getElementsByTagName('p'); // because this is an array
for (let i = 0; i < elm.length; i++) {
	alert(elm[i].textContent);
}

<p id="demo">   This element has extra spacing     and contains <span>a span element</span>.</p>

<script>
function getInnerText() {
  alert(document.getElementById("demo").innerText)
}

function getHTML() {
  alert(document.getElementById("demo").innerHTML)
}

function getTextContent() {
  alert(document.getElementById("demo").textContent)
}
</script>

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
<!--HTML-->
<h2>
  List of People:
</h2>

<ul class='people'>
  <li class='name'>
    Clara
  </li>
  <li class='name'>
    James
  </li>
  <li class='name'>
    Sara
  </li>
</ul>

<!--CSS-->
.name{
  font-size: 16px;
  font-weight: lighter;
  line-height: 26px;
}

<!--EXERCISE-->

// 1. Create an empty array, `names`
// 2. Find all the paragraph elements using `getElementsByClassName`
// 3. For each element found
	// Add the element's text to the array of names
// 4. Alert the final result

<!--SOLUTION-->

let names = []
let x = document.getElementsByClassName('people');
for (let i = 0; i < x.length; i++) {
  let y = x[i].getElementsByClassName('name');
	for (let j = 0; j < y.length; j++) {
  	names.push(y[j].innerHTML);
  }
}
alert(names);

// ----------------------------------------------------------
let names = []
let elm = document.getElementsByClassName('name');
for (let i = 0; i < elm.length; i++) {
	names.push(elm[i].textContent);
  // alert(elm[i].textContent);
}
alert(names);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

document.querySelector

document.querySelector('#name-field'); // by ID
document.querySelector('.my-class'); // by class
document.querySelector('p'); // by tag

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// first we find the element
const elm = document.getElementById('paragraph-1');
// then we set it's innerHTML property
elm.innerHTML = 'My new text';

Example:

<p id="intro">
  Hello World!
</p>

<p id="info">
  JavaScript on The DOM
</p>

TODO:
  
  	1. Create an empty variable, `elm`
  	2. Find an element with the ID `info` and set the variable `elm` with its value
    3. Change the contents of that elements to say `JavaScript Rocks!`


let elm = document.querySelector('#info').innerHTML;
elm = `JavaScript Rocks!`
alert(elm);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Changing Attributes

<img id="lhl-logo" src="http://bit.ly/29O2uM2" width="400" />
document.getElementById('lhl-logo').width = '300';

let elm = document.getElementById('lhl-logo').width;
elm = 200;
alert(elm);
function changeWidth(value){
	elm = value;
  return elm;
}
setTimeout(changeWidth(400), 1000);
alert(elm);


let elm = documnet.getElementById('lhl-logo').width;
function changeWidth(value){
	let t1 = Date.now();
  const initValue = elm;
	elm = value;
  alert(elm);
  if (Date.now() === t1 + 1000) {
  	elm = initValue;
    alert(elm);
  }
}
changeWidth(200);

ADDING AN ATTRIBUTE

document.querySelector('#name-field').setAttribute('placeholder', 'Jane Doe');

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

<button id="my-button" onclick="alert('Clicked!!')">
  Click Me!
</button>

*/

