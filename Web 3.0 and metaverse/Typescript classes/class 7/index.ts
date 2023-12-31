//  #!/usr/bin/env node 
import { type } from "os";

interface vehicle{
    mileage : number,
    model : number
}

let lexus : vehicle = {
    mileage : 20,
    model : 2022
}

function engineEfficiency(car : vehicle){
    let calculation = car.mileage * car.model;
    return calculation;
}
//nominal typing: which is followed in Java, the type has to be exactly the same
console.log(engineEfficiency(lexus));

interface Bikes {
    model:number,
    mileage : number
}

let H2r : Bikes ={
    model : 2023,
    mileage: 30
}

//structural typing: will always look at the structure of object. 
//For structural typing Bikes structure is that it has mileage and model of the type number
console.log(engineEfficiency(H2r));

interface Plane {
    mileage : number,
    model : number,
    speed : number
}
let JF17 : Plane = {
    mileage : 10,
    model : 2019,
    speed : 1000
}
//structural typing: requirements of cars are fulfilled even if there are extra attributes in JF17
console.log(engineEfficiency(JF17));

//Compatibility
//however lexus and H2r can be equated but not with JF17
//JF17 = H2r; //not allowed
H2r = JF17; //assignment operator always compare left side with right side

//The below interface is also different from Plane interface as type of model is different
interface Bus {
    mileage : number,
    model : string,
    speed : number

}

let BMW = {mileage : 200, model : 2023, speed : 100}
lexus = BMW //fine contexual assignment, STALE object assignment
//lexus = {mileage : 200, model : 2023, speed : 100}//FRESH object assignment
lexus = {mileage : 200, model : 2023}//freshh object assignment

//in typescript stale objects with additional properties can be passed, however not in fresh objects

let x : { id: number, [x: string]: any };//Note now 'x' can have any name, just that the property should be of type string
x = {id: 12, name: 2} //second variable can be of any name of type string with any value
let Z = {id:1, en:true}

let y = { id: 1, en: 22};
x = y;
x = Z;
//y = x; // y needs en as second property, there, this will have error
//y=Z;//error


//intersection

interface Student {
    student_id : number,
    name : string
    last_name : string;
}

interface Teacher {
    teacher_Id: number;
    teacher_name: string;
    last_name : string;
}
    
type intersected_type = Student & Teacher;//will have properties of both, common properties will appear only once
    
let obj1: intersected_type = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
    last_name : "string"
};
    
console.log(obj1.teacher_Id);
console.log(obj1['name']]);

let value : unknown;

value = 23;
if(typeof value == "number")
    value += 2;

    let myType = { name: "Zia", id: 1 };

    //Case 1
    myType = { id: 2,  name: "Tom" };//Case 1:
    let myType2 = { id: 2,  name: "Tom" };

//Case 1
myType = myType2;//Case 1: ca
var z: { foo: number, bar?: number };
var z1 = { foo: 1, baz: 2 };
z = z1;//No Error

let val : any = 2;
let val1 : number = val;

let myname: unknown = "Zia";
console.log((myname as string).length);
console.log((<string> myname).length)

