const express = require("express");
const app = express();
const port = 3000;

const USERS = [];
const QUESTIONS = [{
    title : "Two States",
    description : "Given an array return the maximum of the array",
    testCases : [{
        input : "[1,2,3,4,5]",
        output : "5"
    }]
}];
const SUBMISSIONS = [{
    userId : "1",
    questionId  : "1",
    code : "function max(arr){return Math.min(...arr)}",
    status : "rejected"   
},
{
    userId : "2",
    questionId  : "1",
    code : "function max(arr){return Math.max(...arr)}",
    status : "accepted"   
}];

app.post('/signup',(req, res)=>{
    //add logic to decode body
    //body should have user email and password
    //store email and password (as is for now) in the USERS array above (only if the user with the given email doesn't exists)
    //return back 200 status code to the client
    res.send("Hello World")
});//route

app.post('/login',(req, res)=>{
    //add logic to decode body
    //body should have user email and password
    //check if the user with the given email exists in the USERS array
    //also ensure that the password is the same
    //if the password is the same return back 200 status code to the client
    //Also send back a token(any random string will do for now)
    //If password is not the same then return back 401 status code  
    res.send("Hello World from route1")
});//routing to a new route

//sending html in route
app.get('/questions',(req, res)=>{
    //return the user all the questions in the QUESTIONS array
    res.send(`<html><body><h1 style = "color:red;">Chat</h1></body></html>`)
});

//sending json object in route
app.get('/submissions',(req, res)=>{
    //return the user submissions for this problem
    res.json({
                id :123,
                name : "Najla"
            })});//sending html in route

app.get('/solution',(req, res)=>{
    //let the user submit a solution, randomly accept or reject the answer
    //store the submission in the SUBMISSIONS array above
    res.json({
                id :123,
                name : "Najla"
    })});//sending html in route

app.listen(port, ()=>{console.log(`Example app listening on port ${port}`)});//this actually starts the server to listen on the given port