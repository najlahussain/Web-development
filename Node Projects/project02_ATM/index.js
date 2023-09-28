/**This somewhat complex TypeScript/Node.js project is a console-based application.
 * When the system starts the user is prompted with a user id and user pin.
 * After entering the details successfully, the ATM functionalities are unlocked.
 * All the user data is generated randomly. */
import inquirer from "inquirer";
let num1 = 0;
let num2 = 0;
do {
    num1 = Math.random() * 100;
} while (num1 < 10);
do {
    num2 = Math.random() * 1000;
} while (num2 < 100);
console.log("Before rounding ", num1, num2);
num1 = parseInt(num1.toFixed());
num2 = parseInt(num2.toFixed());
let user = {
    id: num1,
    pin: num2
};
console.log(num1, num2);
let answer = await inquirer.prompt([
    {
        name: "userId",
        type: "number",
        message: "Enter 2 digit user ID: "
    },
    {
        name: "pin",
        type: "number",
        message: "Enter 3 digit pin: "
    }
]);
if (answer.userId < 10 || answer.userId >= 100)
    console.log("User Id must be of 2 digits");
else if (answer.pin < 100 || answer.userId >= 1000)
    console.log("Pin must be of 3 digits");
else {
    if ((answer.userId == user.id) && (answer.pin == user.pin))
        console.log("Welcome to ATM functionalities");
    else
        console.log("User id or pin do not match");
}
