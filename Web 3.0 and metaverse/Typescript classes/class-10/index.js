"use strict";
//async await
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ms < 10000)
                resolve("Timer less than 10000");
            else
                reject("");
        });
    });
    return ms;
}
/*
class Human {
    private name : String = '';
    // constructor(name:String){
    //     this.name = name;
    // }
    eat(){

    }
}
class Animal {
    name : String = '';
    age : number = 0;
    // constructor(name:String){
    //     this.name = name;
    // }
    sleep(){
        
    }
}

class Robot {
    name : String = '';

    // constructor(name:String){
    //     this.name = name;
    // }
}


let human1 : Human;
human1 = new Human();
// human1.name = 'najla';
// human1 = new Human('najla');
let a = new Animal();
let r = new Robot();
r = new Animal();

var x: { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string

x = { id: 1, ss: 2*2};  // Ok, `fullname` matched by index signature

// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;

*/
// enum Color1 {Red, Green, Blue};
// var colorName: string = Color1[0];
// console.log(colorName);
var Color2;
(function (Color2) {
    Color2["Red"] = "1";
    Color2["Green"] = "2";
    Color2["Blue"] = "4";
})(Color2 || (Color2 = {}));
; //can assign values to all
var colorIndex = Object.values(Color2).indexOf('2');
var w = Object.keys(colorIndex);
// console.log(w);
var Game;
(function (Game) {
    Game["win"] = "ss";
    Game["lose"] = "dd";
    Game["draw"] = "ee";
})(Game || (Game = {}));
;
; //starts with 0
var colorName = 0 /* Color['Red'] */; //Not allowed with const enums
console.log(colorName);
; //can assign values to all
var colorIndex = 4 /* Color3["Blue"] */;
console.log(colorIndex);
//Arrays
let array = [1, 2, 3, 4];
// Anonymous funciton with explicit type
let myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd2(3, 4));
function greeter(fn) {
    //....
}
//function overloading
// function add(x:number, y:number) : number;
// function add(x:number, y:number) : void;
// function add(x:string, y:number) : number;
function add(x, y) {
    if (typeof x == `number` && typeof y == `number`)
        return x + y;
    else
        console.log(x, y);
}
add(3, 'x');
//rest parameter
// function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
// 	return firstName + " " + restOfName.join("*");
// }
let str = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join("*");
};
console.log(str('najla', 'raza', 'haider', 'ali'));
///callbacks
function callingFunction(initialText, call) {
    call(initialText);
}
callingFunction("myText", function (text) {
    console.log("inside myCallback " + text);
});
function delay1(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("inside timeout");
            resolve();
        }, milliseconds);
    });
}
//Using `then`, `catch`, and `finally`:
//   delay1(1000)
//     .then(() => {
//       console.log('The delay is over');
//     })
//     .catch((error) => {
//       console.error('Something went wrong:', error);
//     })
//     .finally(() => {
//       console.log('This is always executed');
//     });
function processPromise() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield delay1(5000);
            yield delay1(3000);
            console.error('The delay is over');
        }
        catch (err) {
            console.log(err);
        }
    });
}
processPromise();
//function overloading
function add1(arg1, arg2) {
    return arg1 + arg2;
}
//Calling 'add' with any other parameter types would cause an error except for the three options
// console.log(add1(1, 2));
// console.log(add1("Hello", "World"));
// console.log(add1(true, false));
// console.log(add1(1, 2));
//tuples
const failingResponse = ["Not Found", 404];
// but you will need to declare its type as a tuple.
const passingResponse = ["{}", 200];
passingResponse.push("ds");
// console.log(passingResponse);
var tuple = [531, "151", true];
var secondElement = tuple[1]; // secondElement now has type 'string'
// console.log(tuple);
class Point {
    constructor(xs, y) {
        // code
    }
}
let x1 = 0;
let u = 0;
class C {
    constructor() {
        this.x1 = "hello";
    }
    m() {
        // This is trying to modify 'x' from line 1, not the class property
        this.x1 = "world";
        // Type 'string' is not assignable to type 'number'.
    }
}
// // structural typing
class Human {
    constructor(userName) {
        this.name = userName;
    }
}
class Human1 {
    constructor(name) {
        this.name = name;
        // this.age = age;
    }
    eat() {
        console.log(this.name + " is a Human and is eating");
    }
}
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    eat(n) {
        console.log(this.name + " is a Animal and is eating");
    }
}
class WildAnimal1 {
    constructor(title) {
        this.title = title;
    }
    eat() {
        console.log(this.title + " is a Wild Animal and is eating");
    }
}
class Robot1 {
    constructor(name) {
        this.name = name;
    }
}
let h = new Human1("Tom");
let a = new Animal1("Goat");
let r = new Robot1("R2-D2");
let h2 = h;
h2 = a;
//   h2.eat();//error
let r2 = r;
r = a;
//    a = r;
// //Animal has a name, Robot also has a name
// // "a" is a stale object therefore extra eat() method in "a" is ok
let a2 = { name: "Dog", eat: function () {
        console.log("Eat in object literal");
    } };
// a2.eat(); // Not allowed 
a2.eat(3); // Works fine
let isAnimal = a2 instanceof Animal1;
console.log(isAnimal); // What will be printed?
