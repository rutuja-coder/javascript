//Return values

var x = myFunction(4, 3);
document.getElementById("function1").innerHTML = "Return value " + x;

function myFunction(a, b) {
  return a * b;
}

//string

let y = "Good Morning";
let text = "Rutuja";
document.getElementById("stringDemo").innerHTML = "String is " + y;
document.getElementById("stringDemo1").innerHTML =
  "length of Rutuja is " + text.length;

//Finding HTML Elements by Tag Name

const element = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML =
  "The Text position[3]" + element[3].innerHTML;

//Finding HTML elements by class Name
const z = document.getElementsByClassName("intro");

document.getElementById("class").innerHTML =
  "class Position[0] : " + z[0].innerHTML;

//Form
const a = document.forms["form1"];
let text1 = "";
for (let i = 0; i < a.length ;i++) {
  text1 += x.elements[i].value + "<br>";
}
document.getElementById("formDemo").innerHTML = text1;