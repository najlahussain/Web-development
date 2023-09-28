"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Demonstrating modules
const Person_js_1 = require("./modules/Person.js");
let p = new Person_js_1.Person();
p.setAge(30);
console.log(p.getAge());
//export example
const index2_js_1 = require("./index2.js");
const data = __importStar(require("./index2.js"));
console.log(data); //will display all data in the file index2.js
console.log(index2_js_1.myName);
let myName = "Raza";
//selection sort
function sort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                // Choose the lesser of the two:
                min = j;
            }
        }
        // In-place swap:
        const tmp = arr[min];
        arr[min] = arr[i];
        arr[i] = tmp;
    }
}
let arry = ["Usman", "Zia", "Wania"];
sort(arry);
console.log(arry);
