"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let lexus = {
    mileage: 20,
    model: 2022
};
function engineEfficiency(car) {
    let calculation = car.mileage * car.model;
    return calculation;
}
//nominal typing: which is followed in Java, the type has to be exactly the same
console.log(engineEfficiency(lexus));
let H2r = {
    model: 2023,
    mileage: 30
};
//structural typing: will always look at the structure of object. 
//For structural typing Bikes structure is that it has mileage and model of the type number
console.log(engineEfficiency(H2r));
let JF17 = {
    mileage: 10,
    model: 2019,
    speed: 1000
};
//structural typing: requirements of cars are fulfilled even if there are extra attributes in JF17
console.log(engineEfficiency(JF17));
//Compatibility
//however lexus and H2r can be equated but not with JF17
//JF17 = H2r; //not allowed
H2r = JF17; //assignment operator always compare left side with right side
let BMW = { mileage: 200, model: 2023, speed: 100 };
lexus = BMW; //fine contexual assignment, STALE object assignment
//lexus = {mileage : 200, model : 2023, speed : 100}//FRESH object assignment
lexus = { mileage: 200, model: 2023 }; //freshh object assignment
//in typescript stale objects with additional properties can be passed, however not in fresh objects
let x; //Note now 'x' can have any name, just that the property should be of type string
x = { id: 12, name: 2 }; //second variable can be of any name of type string with any value
let Z = { id: 1, en: true };
let y = { id: 1, en: 22 };
x = y;
x = Z;
let obj1 = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
console.log(obj1.teacher_Id);
console.log(obj1.name);
