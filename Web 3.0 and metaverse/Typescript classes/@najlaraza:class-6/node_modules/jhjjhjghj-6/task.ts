// #!/usr/bin/env node 

import inquirer from "inquirer";
import number from "inquirer/lib/prompts/number.js";
import chalk from "chalk";
import banner from "node-banner";

import student from "./student.js";
/**Student registration form
 * Create student reg form
 * take input from inquirer
 * make an Es module
 * use union literals and type alias
 * use nested objects
 * and display info by using chalk and banner library
 */


//Data input
let answers = await inquirer.prompt([
    {
        name: "name",
        type: "input",//string or any character
        message : "Enter your name: "
    },
    {
        name: "reg",
        type: number,//string or any character
        message : "Enter registration number: "
    },
    {
        name: "gender",
        type: "rawlist",
        message: "Select the gender",
        choices: ["Male","Female"]
    },
    {
        name: "houseNo",
        type: number,
        message : "Enter house number: "
    },
    {
        name: "streeNo",
        type: number,
        message : "Enter street number: "
    },
    {
        name: "city",
        type: "string",
        message : "Enter city: "
    }
]);

//let address1 : address
let student1 : student = {
    name : answers.name,
    regNo : answers.reg,
    gender : answers.gender,
    
};

console.log(student1);

(async()=>{
    await banner("Registration information");
})();

console.log(chalk.bgBlueBright(student1.name));
console.log(chalk.bgBlueBright(student1.regNo));


