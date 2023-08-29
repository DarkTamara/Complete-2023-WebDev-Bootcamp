import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// render the page and the page's if decides the title, no data 
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// when form is posted, from the body we take the names and render in index.ejs the number
// this is sending from ejs to the server and back to the ejs to render 
app.post("/submit", (req, res) => {
  const numberOfLetters = req.body.fName.length + req.body.lName.length;
  res.render("index.ejs", { numberLetters : numberOfLetters  } )
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
