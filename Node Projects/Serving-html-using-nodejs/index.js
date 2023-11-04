const http = require('http');
const fs = require('fs');
const home = fs.readFileSync(`home.html`);
const about = fs.readFileSync(`about.html`);
const services = fs.readFileSync(`services.html`);
const contact = fs.readFileSync(`contact.html`);

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    let url = req.url;
    console.log(url);
    res.setHeader('Content-Type', 'text/html');
    if(url == '/')
       res.end(home);
    else if(url == '/about.html')
        res.end(about);
    else if(url == '/services.html')
        res.end(services);
    else if(url == '/contact.html')
        res.end(contact);
    else{
        res.statusCode = 404;
        res.end("<h1>404 error</h1>");
    }
});

server.listen(80,'127.0.0.1',()=>{
    console.log(`Listening on port 80`);
});

