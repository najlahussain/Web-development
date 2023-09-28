//async await

function delay(ms:number) {
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(ms<10000)
            resolve("Timer less than 10000");
            else 
                reject("");
    })
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

enum Color2 {Red = "1", Green = "2", Blue = "4"};//can assign values to all
var colorIndex = Object.values(Color2).indexOf('2' as unknown as Color2);
var w = Object.keys(colorIndex)
// console.log(w);

enum Game {win = "ss", lose = "dd", draw = "ee"};
// console.log(Object.keys(Game)[Object.values(Game).indexOf('ss' as any as Game)]);

//constant enum
const enum Color {Red, Green, Blue};//starts with 0
var colorName: Color = Color['Red']; //Not allowed with const enums
console.log(colorName);

const enum Color3 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex:number = Color3["Blue"];
console.log(colorIndex);

//Arrays
let array : Array<number> = [1,2,3,4];

// Anonymous funciton with explicit type
let myAdd2: (x:number, y:number)=>	number = function(x: number, y: number): number { 
    return x+y; 
};
console.log(myAdd2(3,4));

type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
	//....
}

//function overloading
// function add(x:number, y:number) : number;
// function add(x:number, y:number) : void;
// function add(x:string, y:number) : number;

function add(x:number|string, y:number|string) : number|void{
    if(typeof x == `number` && typeof y == `number`)
        return x + y;
    else
    console.log(x,y);
}

add(3,'x');

//rest parameter
// function buildName(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
// 	return firstName + " " + restOfName.join("*");
// }

let str : (first:string, ...last :string[]) => string = 
    function(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	    return firstName + " " + restOfName.join("*");
    };
console.log(str('najla', 'raza', 'haider', 'ali'));

///callbacks

function callingFunction(initialText: string, call: (text: string) => void)
{
    call(initialText);
}

callingFunction("myText", function (text: string) {
    console.log("inside myCallback " + text);
});

function delay1(milliseconds: number): Promise<void> {
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

    async function processPromise(){
        try{
            await delay1(5000);
            await delay1(3000); 
            console.error('The delay is over');
        }catch(err){
            console.log(err);
        }
    }
    processPromise();
    function add1(arg1: string, arg2: string): string;//option 1
    function add1(arg1: number, arg2: number): number;//option 2
    function add1(arg1: boolean, arg2: boolean): boolean;//option 3
    //function overloading
    function add1(arg1: any, arg2: any): any {
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

const passingResponse: [string, number] = ["{}", 200];
passingResponse.push("ds");
// console.log(passingResponse);

var tuple: [number, string, boolean] = [531, "151", true];
var secondElement = tuple[1]; // secondElement now has type 'string'
// console.log(tuple);

class Point {
    // Overloads
    constructor(x: number, y: string);
    constructor(s: string);
    constructor(xs: any, y?: any) {
      // code
    }
  }

  let x1: number = 0;
  let u = 0;
class C {
  x1: string = "hello";
 
  m() {
    
    // This is trying to modify 'x' from line 1, not the class property
    this.x1 = "world";
// Type 'string' is not assignable to type 'number'.
  }
}

// // structural typing

class Human {
    name: string;
  
    constructor(userName: string) {
      this.name = userName;
    }
  }
   
  class Human1 {
    name: string;
    constructor(name: string) {
      this.name = name;
      // this.age = age;
    }
    eat() {
      console.log(this.name + " is a Human and is eating");
    }
  }

  class Animal1 {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    eat(n:number) {
      console.log(this.name + " is a Animal and is eating");
    }
  }
  
  class WildAnimal1 {
    title: string;
  
    constructor(title: string) {
      this.title = title;
    }
  
    eat() {
      console.log(this.title + " is a Wild Animal and is eating");
    }
  }
  
  class Robot1 {
    name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  }
  let h: Human = new Human1("Tom");

    let a: Animal1 = new Animal1("Goat");
  let r: Robot1 = new Robot1("R2-D2");
  
  let h2 = h;
  
  h2 = a;
//   h2.eat();//error
  
  let r2 = r;
  r = a;
  
//    a = r;
  
  // //Animal has a name, Robot also has a name
  // // "a" is a stale object therefore extra eat() method in "a" is ok

  let a2: Animal1 = {name:"Dog", eat: function() {
    console.log("Eat in object literal");
}}; 

// a2.eat(); // Not allowed 
a2.eat(3); // Works fine

let isAnimal:boolean = a2 instanceof Animal1; 
console.log(isAnimal); // What will be printed?