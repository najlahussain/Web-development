//you can also pass your own index number
var Game1;
(function (Game1) {
    Game1[Game1["win"] = 5] = "win";
    Game1[Game1["lose"] = 6] = "lose";
    Game1["draw"] = "23";
})(Game1 || (Game1 = {}));
;
var Game;
(function (Game) {
    Game["win"] = "ss";
    Game["lose"] = "dd";
    Game["draw"] = "ee";
})(Game || (Game = {}));
;
//console.log(typeof Game);
//console.log(Object.keys(Game)[0]);
//you cannot access const enum with array index methodtsc
var indexOfGame = Object.values(Game).indexOf('dd');
//console.log(indexOfGame);
console.log(Object.keys(Game)[indexOfGame]);
var myArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var myArray2 = [];
//filter method takes as an argument callback function
var output = myArray1.filter(function (item) { return item % 2 == 0; });
//console.log(output);
//maps values 
var output1 = myArray1.map(function (item) { return item % 2 == 0; });
//console.log(output1);
//every returns boolean value and checks that all elements meet a function
var output2 = myArray1.every(function (item) { return item % 2 == 0; });
//console.log(output2);
var output3 = myArray1.some(function (item) { return item % 2 == 0; });
//console.log(output3);
//reduce, performs the function on every element. 5 is the initiating index
var output4 = myArray1.reduce(function (total, item) { return total + item; }, 5);
//console.log(output4)
//reduce right starts the operation from right
//fill method replaces value starting from first index and till -1 of ending index
/**Functions */
//anonymous functions
var myadd = function (x, y) { return x + y; };
console.log(myadd); //passing reference of function
console.log(myadd(9, 9)); //passing values to functions
var mul = function (x, y) { return x * y; };
console.log(mul(9, 9)); //passing values to functions
//optional, default and rest are always last parameter of function
function greet(name, title) {
    //the compiler will not know at the time of calling that which parameter will take the value
    return title ? "".concat(title, " ").concat(name) : name;
}
/** async await */
//javascript is a single thread language, i-e. it executes one process at a time
console.log("this is task 1");
setTimeout(function () { console.log("This is task 2"); }, 3000); //here this will be added to event loo
setTimeout(function () { console.log("This is task 5"); }, 0); //also this will be added to event loop, even though we are passing zero
//this behaviour is called asynchronous behavior
//the event loop behaves as a queue, whichever completes first is forwarded first
setTimeout(function () { console.log("This is task 6"); }, 2000);
console.log("this is task 3");
console.log("this is task 4");
//whenever any process takes time, then it is shifted to event queue. Event queue is handled by web browser
//google chrome has introduced a v8 engine, operations which are time taken are set aside
//this is known as event loop: operations which are set aside
//the compiler checks each line, if it is not async, then it will be moved to call stack
//in case it is async, then it will be moved to web api, which forwards it to event loop
//when call stack is emptied
