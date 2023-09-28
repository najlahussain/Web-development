import inquirer from "inquirer";
//const promptSync = require(`prompt-sync`);//we use require on commonJS

import sum from "./first-module.js";
import number from "inquirer/lib/prompts/number.js";
import chalk from "chalk";
import banner from "node-banner";
sum();

let answers = await inquirer.prompt([
    {
        name: "firstName",
        type: "input",//string or any character
        message : "Enter your first name: "
    },
    {
        name: "lastName",
        type: "input",//string or any character
        message : "Enter your last name: "
    },
    {
        name: "userAge",
        type: number,
        message: "Enter Age: ",
        //choices: ["Male","Female"]
        validate : (userAge:number)=>{
            if(userAge < 20)
                return "Age should be greater than 20";
            else 
                return true;
        }
    },
    {
        name: "gender",
        type: "rawlist",
        message: "Select the gender",
        choices: ["Male","Female"]
    },
    {
        name: "hobbies",
        type: "checkbox",
        message: "Select the hobbies",
        choices: ["Hiking","Reading","Traveling"]
    },
    {
        name: "Confirmed",
        type: "confirm",
        message: "Select confirm or not",
    }
]);

console.log(answers);
console.log(answers.userName);

console.log(chalk.bgBlueBright(answers.firstName));

(async()=>{
    await banner("Hello World");
})();
//TASKS
//1. create a calculator. Take input from users. addition, multiplication, subtraction, division should be in separate modules and imported.
//use switch at the end.

//2. create 5 MCQs. calculate marks in a separate module. calculate total marks