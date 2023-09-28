/**This project is a simple console based Student Management System. In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students in the given courses. Also, you will be implementing the following operations enroll, view balance, pay tuition fees, show status, etc. The status will show all the details of the student including name, id, courses enrolled and balance.This is one of the best projects to implement the Object Oriented Programming concepts.*/
import inquirer from "inquirer";
import Student from "./Student.js";
//for storing list of total students
let students = [];
let ans; //for storing choice to continue menu
/*
generating 5 digit random number
let x = Math.floor(Math.random()*90000) + 10000;
console.log(x);
*/
do {
    displayMenu();
    let answer = await inquirer.prompt([
        {
            name: "choice",
            type: "number",
            message: `Select the function you would like to perform: `,
        },
    ]);
    switch (answer.choice) {
        case 1:
            //creating new student with id
            let s = new Student();
            let sn = await inquirer.prompt([
                {
                    name: "sName",
                    type: "string",
                    message: `Enter student name: `,
                },
            ]);
            s.name = sn.sName;
            console.log(`New student succuessfully created with id: ${s.id}`);
            students.push(s);
            break;
        case 2:
            let sCourses = [];
            let st = await inquirer.prompt([
                {
                    name: "sid",
                    type: "number",
                    message: `Enter student id: `,
                },
            ]);
            let s1 = searchStudent(st.sid);
            if (s1) {
                let c = await inquirer.prompt([
                    {
                        name: "num",
                        type: "string",
                        message: `Enter number of courses to be enrolled: `,
                    },
                ]);
                for (let i = 0; i < c.num; i++) {
                    let c1 = await inquirer.prompt([
                        {
                            name: "course",
                            type: "string",
                            message: `Enter course name: `,
                        },
                    ]);
                    sCourses.push(c1.course);
                }
                s1.enroll(sCourses);
                //setting fee balance for newly added courses
                s1.balance = c.num * 1000;
                console.log(`Thank you for enrolling courses of student ${s1.name}. Your fee balance is: ${s1.balance}`);
            }
            else
                console.log("Incorrect id entered");
            break;
        case 3:
            let st1 = await inquirer.prompt([
                {
                    name: "sid",
                    type: "number",
                    message: `Enter student id: `,
                },
            ]);
            let s2 = searchStudent(st1.sid);
            if (s2) {
                let balance = s2.viewBalance();
                console.log('Balance amount is: ', balance);
            }
            else
                console.log("Incorrect id entered");
            break;
        case 4:
            let st2 = await inquirer.prompt([
                {
                    name: "sid",
                    type: "number",
                    message: `Enter student id: `,
                },
            ]);
            let s3 = searchStudent(st2.sid);
            if (s3) {
                let payFee = await inquirer.prompt([
                    {
                        name: "fee",
                        type: "number",
                        message: `Enter fee amount: `,
                    },
                ]);
                if (payFee.fee > 0 && payFee.fee <= s3.balance) {
                    s3.payTuitionFee(payFee.fee);
                    console.log(`Course fee successfully paid, new balance is: `, s3.viewBalance);
                }
                else
                    console.log("incorrect amount entered");
            }
            else
                console.log("Incorrect id entered");
            break;
        case 5:
            let st3 = await inquirer.prompt([
                {
                    name: "sid",
                    type: "number",
                    message: `Enter student id: `,
                },
            ]);
            let s4 = searchStudent(st3.sid);
            if (s4)
                s4.showStatus();
            else
                console.log("Incorrect id entered");
            break;
    }
    ans = await inquirer.prompt([
        {
            name: "choice",
            type: "string",
            message: `Would you like to perform another function(Y/N)?`,
        },
    ]);
} while (ans.choice == "y" || ans.choice == "Y");
// functions
function displayMenu() {
    console.log("1. Add New Student");
    console.log("2. Enroll courses");
    console.log("3. Check Balance");
    console.log("4. Pay Fee");
    console.log("5. Check Status");
}
function searchStudent(sid) {
    for (let i = 0; i < students.length; i++) {
        if (sid === students[i].id)
            return students[i];
    }
}
