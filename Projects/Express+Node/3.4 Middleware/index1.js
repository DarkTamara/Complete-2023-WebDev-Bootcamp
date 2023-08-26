import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import morgan from 'morgan';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


//use body parser to create a body for url-encoded requests like this form submission
// extended is what is used in the background to parse the data 
// this helps us have a request body we can use in this module 
app.use(bodyParser.urlencoded( {extended : true}));

// this is used to log the requests to the server 
//tiny is the packages's setting for logging
app.use(morgan("tiny"));

app.post("/submit", (req,res) => {
  console.log(req.body);

  res.sendStatus(200);
  
})

app.get("/", (req, res) => {
  // sending a whole file to render 
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
