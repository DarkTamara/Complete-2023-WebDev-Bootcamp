//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import morgan from 'morgan';
import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

//consts
const app = express();
const port = 3000;
let response = '';
const __dirname = dirname(fileURLToPath(import.meta.url));

//functions
function checkPass( req, res, next){
    if( req.body.password === 'ILoveProgramming') {
        response = __dirname + '/public/secret.html';
    } else {
        response =  __dirname + '/public/index.html';
    };
    next();
};


//middleware
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded( {extended : true}));
app.use(checkPass);

//requests
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });

app.post('/submit', ( req, res) => {
    console.log("submit I guess")
});

app.post('/check', ( req, res) => {
    res.sendFile(response);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
