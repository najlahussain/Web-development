"use strict";
//Weekend
// 1. car maintenance
// 2. do some grocery
// 3. pick dress from laundry
// 4. attend an event
/*
console.log("Car maintenance");
console.log("do some grocery");
console.log("pick dress from laundry");
console.log("Attend an event"); //time based, we need to intentionaly delay it or do it at a specific time

//what is a callback?
//pass a function within a function as a parameter

function callback(text:string, x:number){
    console.log("printing: ",text);
}

function task1(anyfunction : (text:string,x:number)=>void){ //(text:string) means that anyfunction is taking a parameter of type string and returns void
    //we can also use any as input to the function function task1(anyfunction : any)
    console.log("do something");
    anyfunction("we are calling callback",0);
}

task1(callback);

function carMaintenance(){
    console.log("Drop car at 9 at worshop and pick it in 2 hours");
    setTimeout(()=>{
        console.log("Car is fixed...");
        return "Your car is ready";
    }, 2000)
}

function pickDress(){
    console.log("Pick dress after getting car");
    setTimeout(()=>{
        console.log("dress is ready...");
        return "Your dress is ready";
    }, 100)
}
//below functionaly is without callback
//task 1
let mechanicResponse = carMaintenance();
console.log("mechanic response...", mechanicResponse);
//task 2
setTimeout(()=>{
    console.log("Do grocery...");
    return "Do grocery";
}, 0)
//task 3
//Direct call of pickDress() will give you undefined, so we store it in a variable and then print it
let laundryResponse = pickDress();
console.log("laundry response...", laundryResponse);
//task 4
setTimeout(()=>{
    console.log("Attend event...");
    return "Attend event";
}, 0)
*/
Object.defineProperty(exports, "__esModule", { value: true });
//The problem in the above code is that it is not executing in the order we want
//Here one function is dependant on another, therefore we use callback
console.log("*************************************************");
function carMaintenance1(carMain) {
    //console.log("callback pick dress message: ..");
    setTimeout(() => {
        // console.log("Car is fixed...");
        carMain("Your car is ready");
    }, 2000);
}
function carMaintenanceCallback(text) {
    console.log("callback carmaintenance message: ..", text);
    pickDress1(dressCallback);
}
function doGrocery() {
    return "Do Grocery";
}
function dressCallback(text) {
    console.log("callback pick dress message: ..", text);
    console.log(attendEvent());
}
function pickDress1(dressCallback) {
    console.log("Pick dress after getting car");
    setTimeout(() => {
        //console.log("dress is ready...");
        dressCallback("Your dress is ready");
    }, 100);
}
function attendEvent() {
    return "Attend event";
}
console.log("Dropping car");
carMaintenance1(carMaintenanceCallback);
//console.log("Doing grocery");
console.log(doGrocery());
let x = 10;
exports.default = x;
