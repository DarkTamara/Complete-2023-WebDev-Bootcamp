import express from "express";
import bodyParser from "body-parser";

//consts
const port = 3000;
const app = express();


//middleware 
app.use(express.static("public")); // static files import 
app.use(bodyParser.urlencoded({ extended: true })); //parse body 


//requests 
app.get("/", (req, res) => {
    res.render("index.ejs");
});



//listen
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });