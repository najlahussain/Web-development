"use strict";
//callbacks introduce inversion of control, we call one fucntion and then control is not in our hand
//promises
//car maintenance example to be done with promises
function carMaintenance() {
    console.log("1. Leaving car");
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Your car is ready. Picked car.");
        }, 2000);
    });
    return result;
}
function doGrocery() {
    setTimeout(() => {
        console.log("2. Doing grocery");
    }, 0);
}
function pickDress(status) {
    let result = new Promise((resolve, reject) => {
        if (status == "ready")
            resolve(1);
        else
            reject(0);
    });
    return result;
}
function attendEvent() {
    return ("4. Attending event ...");
}
//resolve value is received in .then
//reject value is received in .catch
let mechanicResponse = carMaintenance();
doGrocery();
mechanicResponse.then((text) => {
    console.log(text);
    return pickDress("ready");
}).then((resp) => {
    if (resp == 1)
        console.log("3. Dress picked");
    return attendEvent();
}).then((text) => {
    console.log(text);
}).catch((err) => {
    if (typeof err == 'number') {
        console.log("Error picking dress", err);
    }
});
