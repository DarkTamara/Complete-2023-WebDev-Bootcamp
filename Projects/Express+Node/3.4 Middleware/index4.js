//street name generator on server 
import express from "express";
import morgan from "morgan"; //http req logger 
import bodyParser from "body-parser"; //body parsing 
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

var bandName = "";

// functions
function bandNameGenerator(req, res, next){
  bandName = req.body["street"] + req.body["pet"];
  next();
}

//middleware
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded( {extended : true}));
app.use(bandNameGenerator)

//methods
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req,res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
  res.sendStatus(200);
})

//listen 
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//other option for doing this is to just have the concat in the response 