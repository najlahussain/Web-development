/**Develop a simple command line Todo app using TypeScipt, Node.js and Inquirer. */

import inquirer from "inquirer";

type tasks = {
    priority : number;
    task : string
};

let answer : any;
let array : string[] = [];

do{
    displayMenu();
    answer = await inquirer.prompt([
        {
            name : "choice",
            type : "number",
            message : `Select the function you would like to perform: `
        }
    ]);
    switch(answer.choice){
        case 1: 
            let list = await inquirer.prompt([
                {
                    name : "task",
                    type : "string",
                    message : `Enter new task: `
                }
            ]); 
            array.push(list.task);
            break;
        case 2:
            displayList();
            let index = await inquirer.prompt([
                {
                    name : "no",
                    type : "number",
                    message : `Enter task number to remove: `
                }
            ])
            if(index.no > 0 && index.no <= array.length)
                array.splice(index.no-1, 1);
            else
                console.log("Incorrect number entered");
            break;
        case 3: 
            displayList();
            break;
    }
    answer = await inquirer.prompt([
        {
            name : "choice",
            type : "string",
            message : `Would you like to perform another (Y/N)?`
        }
    ]);
}while(answer.choice == 'y' || answer.choice == 'Y');

function displayList(){
    console.log("Task list is: ")
    for(var i = 0; i< array.length; i++){
        console.log((i+1), ":", array[i]);
    }
}

function displayMenu(){
    console.log("1. Add Task");
    console.log("2. Remove Task");
    console.log("3. See task list");
}