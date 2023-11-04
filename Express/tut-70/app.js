const express = require("express");
const path = require('path');
const app = express();
const port = 80;
const fs = require('fs');

//EXPRESS SPECIFIC STUFF
//first static is the url, second static is the name of the folder
//http://localhost/static/index.js
app.use('/static',express.static('static'));//for serving static files

//TO GET DATA FROM FORMS
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');
app.get('/demo', (req, res) => { //demo is the name of .pug file in the views folder.
    res.status(200).render('demo', { title: 'Hey', message: 'Hello there!' })//RENDER IS USED WITH TEMPLATE ENGINE
  })
  app.get('/demo1', (req, res) => { 
    const con = 'This is the changed content';
    const params = {title : 'This is the title',
                    content: con//'This is the content'
                }
    res.status(200).render('index', params)
  })

//getting data from form
app.post('/',(req, res)=>{
    const params = 'Your form has been submitted successfully';
    console.log(req.body); 
    let name = req.body.name;
    let age = req.body.age;
    let address = req.body.address;
    let outputToWrite = `client name ${name}, and ${age} years old, with address ${address}`;
    //writing data to file
    fs.writeFileSync('output.txt', outputToWrite);
    // fs.close();
    res.render('demo',{title : 'registration successfull', message : params});

});
//ENDPOINTS
app.get("/",(req,res)=>{
    res.status(200).send("My first express tutorial");
});

app.get("/about",(req,res)=>{
    res.send("About page");
});

app.post("/about1",(req,res)=>{
    res.send("<html><body><h1>Posting request for About us page</h1></body></html>");
});

app.listen(port,()=>{
    console.log(`The applciation started successfully on port ${port}`);
});