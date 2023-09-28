// Assignment 2:
// Create a grading system that takes subject marks as input from the user through prompts 
//and returns the corresponding grades using functions and if-else conditions.

import PromptSync from "prompt-sync";

function checkGrade(marks:number) : string{
    let grade = ``;
    if(marks>100)
    {    
        grade = `Marks cannot exceed 100`;
        return grade;
    }
    if(marks >= 80)
        grade = `A`;
    else if(marks >= 70)    
        grade = `B`;
    else if(marks >= 60)    
        grade = `C`;
    else if(marks >= 50)    
        grade = `D`;
    else if(marks >= 0)    
        grade = `F`;
    else
        grade = 'negative numbers not allowed';

  //  console.log(grade);    
    return grade;
}

const prompt = PromptSync();
let input:number = parseInt(prompt(`Enter marks: `));
console.log(input);
let g = checkGrade(input)
console.log('Grade is: ' + g);
