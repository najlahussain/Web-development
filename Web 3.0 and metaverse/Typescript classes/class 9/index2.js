"use strict";
//callback example
function carMaintenance1(carMain) {
    //console.log("callback pick dress message: ..");
    setTimeout(() => {
        // console.log("Car is fixed...");
        carMain("Your car is ready");
    }, 2000);
}
function pickDress1(dressCallback) {
    console.log("Pick dress after getting car");
    setTimeout(() => {
        //console.log("dress is ready...");
        dressCallback("Your dress is ready");
    }, 100);
}
carMaintenance1(function (text) {
    console.log("callback carmaintenance message: ..", text);
    pickDress1(function (text) {
        console.log("callback pick dress message: ..", text);
        console.log(function () {
            return "Attend event";
        });
    });
});
