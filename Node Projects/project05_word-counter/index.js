/**The user will enter a english paragraph and all that is needed is to just to implement counting
 * characters and words without whitespaces.*/
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "paragraph",
        type: "string",
        message: `Enter paragraph to count words and characters: `,
    }
]);
let charCounter = 0;
let para = answer.paragraph.toString();
let words = para.split(' ');
console.log("Word count is: ", words.length);
words.forEach(element => {
    for (let i = 0; i < element.length; i++) {
        charCounter++;
    }
});
console.log("Characters count is: ", charCounter);
