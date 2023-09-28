/**The app will show the students multiple choice questions and promt the user to reply. In the end it will show the students the result of the quiz.*/

import inquirer from "inquirer";

let marks : number = 0;
let q1 = await inquirer.prompt([
  {
    name: "choice",
    type: "rawlist",
    message: `Is typescript an asynchronous language?`,
    choices : ['Yes','No']
  },
]);
let q2 = await inquirer.prompt([
  {
    name: "choice",
    type: "rawlist",
    message: `Protected modifiers are available:`,
    choices : ['publically','nowhere', 'inherited class']
  },
]);
if(q1.choice == 'Yes') {
  marks++;
}
if(q2.choice == 'inherited class') {
  marks++;
}
console.log(`You achieved ${marks} marks`);
