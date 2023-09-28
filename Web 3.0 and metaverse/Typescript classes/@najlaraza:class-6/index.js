//declaring unions
let myName = "Najla";
let myAge = 10;
//myName = null;
myAge = "100";
//myAge = true; //error as it can only have number string and null values
console.log(myName.toString());
console.log(myName.toUpperCase());
console.log(myAge.toUpperCase());
let newAge = Math.random() > 0.6 ? "Khan" : 60; //internally it will be assigned union type of both string and number
console.log(newAge);
newAge = "hh";
newAge = 55;
//Math.random() generates value between 0 and 1
console.log(typeof newAge === "string" ? "hello" : "world");
let num = 20.8767565;
console.log("num: " + num.toFixed(2));
let data;
let anyVariable; //you can use any type with it
function calculate(amount) {
    if (typeof amount === "string")
        amount.toLowerCase();
    else if (typeof amount === "number")
        amount / 1000;
}
let age;
//age = `g`;// you can only assign the string najla
let trafficLight;
//objects
let carObj = {
    model: 123,
    color: `yellow`,
    'Fuel avg': '15km'
};
console.log(carObj.color);
console.log(carObj['Fuel avg']); //you have to access variables with space in name like this
console.log(carObj['color']); //you can also use the above notation with normal variable names
let car = {
    color: `red`
};
let person = {
    firstName: "",
    lastName: "",
    address: {
        houseNO: 123,
        streetNo: 2,
    },
    car1: car
};
console.log(person.address.houseNO);
console.log(person.address[`houseNO`]);
console.log(person[`car1`][`color`]);
export {};
