import express from "express";

const app = express();
const port = 3000;

//custom middleware 
function logger (req, res, next){
  console.log("method: "+ req.method);
  console.log("url: " + req.url);
  
  next();
}

//using the middleware
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
