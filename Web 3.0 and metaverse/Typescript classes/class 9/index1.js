"use strict";
//examples of callbacks
function calculate(calculateCallBack, x) {
    calculateCallBack(x * 5);
}
function calculateCallBack(result) {
    console.log("calculated value: ", (result / 2));
}
calculate(calculateCallBack, 10);
//class will start when teacher will arrive
function teacherArrival(cb) {
    cb("Teacher arrived.....");
}
function startClass(result) {
    console.log(result);
    console.log("Start class");
}
teacherArrival(startClass);
