/*var first = "Najla";
var second = "Raza";
var third = first + second;
//alert(third);
var sentence = "world's hello";
//alert(sentence);
var sent2 = 'course name is: "intro to programming"';
console.log(sent2);
console.log(typeof sent2);
sent2 = undefined;
console.log(sent2);
sent2 = null;
console.log(sent2);
var age = prompt("What is your age? ");
age = parseInt(age);
console.log(age+1)

var a = 6;
console.log(a==6)
console.log(a === "6")

var b = 1
var c = true
console.log(b == c)
console.log(b === c)


var x = 10;
    var result = x <10 || x++ <20;
console.log("value of x", x);
console.log("Result: ", result);

if(x<5)
    console.log("condition is true");
else    console.log("condition is false");



var y = 10;
switch(y){
    case 1:
        console.log("first case")
        break;
    case 2:
        console.log("second case")
        break;
    case 10:    
        console.log("last case")
        break;
    default:
        console.log("default case")
}

if('cat' && 'Dog' && "")
    console.log(true);
else 
    console.log(false);

//prime number
var input = parseInt(prompt("Enter number: "));
var prime = true;

for(var i = 2; i<input; i++){
    if(input%2 == 0){
        console.log("Given number: " + input + " is not a prime number");
        prime = false;
        break;
    }
        
}
if(prime)
    console.log(input + " is a prime number");


//arrays

var temperature = ['sunday', 24, 32];
for(var i = 0; i<temperature.length; i++) {
    console.log(temperature[i]);
    alert(temperature[i]);
}

var grades = new Array(2);
for(var i = 0; i< grades.length; i++) {
    grades[i] = prompt("Enter "+ (i+1) + " value:");
}
console.log(grades);

var foods = ["pizza", "burger", "snacks"];
foods.push("drink");//stack push
console.log(foods);
foods.pop();
console.log(foods);
foods.shift();//dequeue
console.log(foods);
foods.push("bread","drink","curry");
console.log(foods);
foods.unshift("drink");//adds to zero index element and shift others up
console.log(foods);


//functions
showMessage("Hello");
function showMessage(message){
    alert(message);
}
*/

var x = 5;
var y = 6;
var result = x + y;
console.log("Result: " + result);
x++;//increment x by 1, x = 6
++x; // increment x by 1, x = 7
console.log("Post increment x: " + x++);//it will first print and then increment x, x = 7
console.log("After post increment x: " + x); //x=8
console.log("Pre increment x: " + ++x);//it will first print and then increment x, x = 9

x += y; //x = x + y = 9 + 6 = 15
console.log(x); //x = 15 




















