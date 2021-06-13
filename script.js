
// Simple Paragraph

function myFunction() {
    document.getElementById("demo").innerHTML =
        "JavaScript is the worlds most popular programming language. JavaScript is the programming language of the Web. ";
}

// Addition

function myFunctionAdd() {
    document.getElementById("cal1").innerHTML = 5 + 6;
}


//ADDITION,SUBSTRACTION,MULTIPLICATION,DIVISION 

var x, y, z;
x = 5;
y = 6;
z = x + y;
p = x * y;
q = x - y;
r = x / y;
s = (5 + 6) * 2
v = 2 + 4 + "5"
x+= 4
y++
b=y
var a = 4
var c= Math.pow(a,2)


document.getElementById("add").innerHTML =
    "The value of 5 + 6 addition is : " +
    z + '<br>' +
    "The value of 5 * 6 multiplication is : " +
    p + '<br>' +
    "The value of 5 - 6 substraction is :  " +
    q + '<br>' +
    "The value of 5 / 6 division is : " +
    r + '<br>' +
    "The value of (5+6)*2 is : " + s +
    '<br>' + "The value of 2+4 and + 5 take in double code is : " + v //   If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated
     +'<br>' +"Using x is 5 and x+= 4 operation : "+ x
     +'<br>' +"Using x is 6 and y++ operation : "+ b // ++ (double +) increase by 1
     +'<br>' +"Using a is 4 and pow is 2 operation : "+ c



//litrals=>Mumber

document.getElementById('num').innerHTML = 10.50

//variable Name

var $ = 2;
var $$Money = 4;
var _one = 3;
var _two = 60;
document.getElementById('new').innerHTML = $ + $$Money;
document.getElementById('new1').innerHTML = _one + _two


// gobal scope which is declared in outside
var cName = "Swift"
globalfunction();

function globalfunction() {
    document.getElementById('global').innerHTML = "Car Name is : " + cName
}

//block SCope
var x = 2; //global varibale
{
    var x = 10; //block varibale
}

document.getElementById('block').innerHTML = "block variable is : " + x

//using const

const car = { type: "4 wheeler", color: "red" } //const object we can change it

car.color = "blue"

document.getElementById('contVariable').innerHTML = "chnges in const : " + car.color

//Try Catch

try {
    const car = { model: "500", color: "white" } // object
    car = { model: "EX0", color: "red" }      //create a same object again
}
catch (err) {
    document.getElementById('tryCatch').innerHTML = err
}

//data type is number,string,object

//array

var cars=["swift","Duster","BMW"]

document.getElementById("array").innerHTML= cars[1]

//object

var person={
    firstName :"Rutuja",
    lastName :"patil",
    age:"23"
};

document.getElementById('object').innerHTML= person.firstName + " " + person.lastName + " " + "Age is:" + person.age


