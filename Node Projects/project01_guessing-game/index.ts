import inquirer from "inquirer";

let num = Math.random() * 10;
let rounded = num.toFixed();

let answer = await inquirer.prompt([
    {
        name : "num1",
        type : "number",
        message : "Guess a number between 0 and 10: "
    }
]);
if(answer.num1 == rounded)
    console.log("Congratulations! you guessed right");
else {
    console.log("Hard luck!!! Please try again");
    console.log("Generated number was ", rounded);
}
