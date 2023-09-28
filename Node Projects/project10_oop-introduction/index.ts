import Person from "./person.js";
import Student from "./Student.js";
import inquirer from "inquirer";

try{
let ans = await inquirer.prompt([
  {
    name: "a",
    type: "number",
    message: "Enter any option from 1 or 2.",
  },
]);
if (ans.a == 1 || ans.a == 2) {
  let p: Person = new Person();
  p.askQuestion(ans.a);
  console.log(`You are an ${p.getPersonality}`);
} else console.log("You are still a mystery");
}catch(err){
    console.log("Enter number data either 1 or 2");
}
let ans = await inquirer.prompt([
  {
    name: "name",
    type: "string",
    message: "Enter student name: ",
  },
]);

let s : Student = new Student();
s.setName = ans.name;
console.log(`Your name is: ${s.getName} and your personality is: ${s.getPersonality}`);