const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

// CONNECTING  TO MONGODB
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ictTutorials');
  console.log("db connected");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//once database is connected, we have to define the schema. 
//A schema is a JSON object that defines the structure and contents of your data. You can use Atlas App Services' BSON schemas, which extend the JSON Schema standard, to define your application's data model and validate documents whenever they're created, changed, or deleted. 
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: String, 
  no: Number,
  email: String,
  message: String
});
//A schema is compiled into a model, once model is compiled then we can make our objects.
const contact = mongoose.model('ContactUs', contactSchema);//once save method is called, then a collection will be made of name Blog

// var myBlog = new blog({title:"Mongoose", author : "Najla"});
// console.log(myBlog.title);

//EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));//for serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');//set the template engine as pug
app.set('views', path.join(__dirname, 'views'));//set the views directory

//ENDPOINTS
app.get('/', (req, res) => { 
    const con = 'This is the changed content';
    const params = {}
    res.status(200).render('home.pug', params)
  })
app.get('/contact', (req, res) => { 
    const con = 'This is the changed content';
    const params = {}
    res.status(200).render('contact.pug', params)
  })
  app.post('/contact', (req, res) => { 
    var contactData = new contact(req.body);//getting data from request body
    contactData.save().then(()=>{
      res.send("Data saved successfully");
    }).catch(()=>{
      console.log();
      res.status(400).send("error");
    });
    res.status(200).render('contact.pug')
  })
//Server Run
app.listen(port,()=>{
    console.log(`The applciation started successfully on port ${port}`);
});