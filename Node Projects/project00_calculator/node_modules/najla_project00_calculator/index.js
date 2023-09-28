/**@author Najla Raza
 * Simple Command Line Calculator
 * Develop a simple command line calculator using TypeScipt, Node.js and Inquirer.

Create a GitHub repository for the project and submit its URL and NPX command in the project submission form.
Please note that you will create a NPX command for your project and publish it on npm.
After the NPX command is working you will announce it on Panaverse groups on Facebook, Discord, and Twitter.
 */
import inquirer from 'inquirer';
import chalk from "chalk";
function addition(num1, num2) {
    return num1 + num2;
}
let subtraction = (num1, num2) => {
    return num1 - num2;
};
let multiplication = (num1, num2) => {
    return num1 * num2;
};
let division = (num1, num2) => {
    if (num2 != 0)
        return num1 / num2;
    else
        return "Division by zero is not permissible";
};
let result = 0;
do {
    let answers = await inquirer.prompt([
        {
            name: `num1`,
            type: `number`,
            message: `Enter first number: `
        },
        {
            name: `num2`,
            type: `number`,
            message: `Enter Second number: `
        },
        {
            name: `operation`,
            type: `rawlist`,
            message: `Enter choice of operation to perform: `,
            choices: [`Addition`, `Subtraction`, `Multiplication`, `Division`]
        }
    ]);
    switch (answers.operation) {
        case "Addition":
            result = addition(answers.num1, answers.num2);
            break;
        case "Subtraction":
            result = subtraction(answers.num1, answers.num2);
            break;
        case "Multiplication":
            result = multiplication(answers.num1, answers.num2);
            break;
        case "Division":
            result = division(answers.num1, answers.num2);
            break;
    }
    console.log(chalk.bgBlueBright("\n\nYour answer is: " + result + "\n"));
    var option = await inquirer.prompt([
        {
            name: `choice`,
            type: `rawlist`,
            message: `Enter choice of operation to perform: `,
            choices: [`Yes`, `No`]
        }
    ]);
} while (option.choice == 'Yes');
console.log(chalk.bgMagenta("Thank you for using our calculator"));
