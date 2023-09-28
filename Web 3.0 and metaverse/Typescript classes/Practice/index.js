"use strict";
class A {
    constructor() {
        this.MyvirtualMethod();
    }
    MyvirtualMethod() {
        console.log("A");
    }
}
class B extends A {
    constructor() {
        super(...arguments);
        this.testString = "B";
    }
    MyvirtualMethod() {
        // console.log(this.testString); // This becomes undefined
        super.MyvirtualMethod();
    }
}
let obj = new B();
obj.MyvirtualMethod();
//*******************************
//checking types
class Foo {
}
class Bar extends Foo {
}
class Bas {
}
var bar = new Bar();
// console.log(bar instanceof Bar); // true
// console.log(bar instanceof Foo); // true
// console.log(bar instanceof Object); // true
// console.log(bar instanceof Bas); // false
//Type guard
class Dog {
    woof() { }
}
class Cat {
    meow() { }
}
var pet = new Dog();
;
if (pet instanceof Dog) {
    pet.woof(); // OK
}
else {
    //   pet.woof(); // Error. Type guard doesn't allow you to access woof() even though it belongs to Dog class
    //you can achive that by using the "is" operator
}
function petIsCat(p) {
    return p instanceof A;
}
//abstract classes
class Base {
    foo() { return this.bar(); }
}
class E extends Base {
    bar() { return 1; }
}
// var obj1 = new Base();//Error, cannnot create a instance of a Abstract class
var obj1 = new E();
// console.log(obj1.foo());
//Constructor
class X {
    constructor(x) {
        if (!x)
            this.x = "";
        else
            this.x = x;
    }
}
class Y extends X {
    constructor() {
        let x = 2 + 100;
        // console.log("constructor");//it still doesn't force super to be the first statement
        super();
        // super(this.y);//this is an error at runtime only
        this.y = "y";
    }
}
let y1 = new Y();
//accessors (getters and setters)
var passcode = "secret passcode";
class Employee {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        this._fullName = newName;
    }
}
var employee = new Employee();
employee.fullName = "Bob Smith"; //setter
if (employee.fullName) { //getter
    // console.log(employee.fullName);//getter
}
class MyClass {
    constructor() {
        this.name = "MyClass";
    }
    getName() {
        return this.name;
    }
}
const c = new MyClass();
const obj2 = {
    name: "obj",
    getName: c.getName,
};
// Prints "obj", not "MyClass"
//   console.log(obj2.getName());
const g = c.getName();
function printLabel(labeledObj) {
    // console.log(labeledObj.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabelX(labelledObj) {
    // console.log(arguments[0], arguments[1]);
}
printLabelX({ name: "Zia" }); // Ok, `name` matched by index signature
var myObj1 = { label: "Size 10 Object" };
printLabel(myObj1); //Case 1 exact properties: OK
var obj3 = { name: "Zia" };
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare.area, mySquare.color);
//generators
function* generatorFn() {
    //first task
    console.log("additional task");
    yield "firstValue";
    //second task
    yield "secondValue";
    //third task
    yield "thirdValue";
}
let i = 0;
var generator = generatorFn();
var next = generator.next();
while (!next.done) {
    console.log(next.value);
    next = generator.next();
    console.log(i++);
}
