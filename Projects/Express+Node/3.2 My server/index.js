import express from 'express';

let port = 3000;
let app = express();

app.get("/", (req, res) => {
    res.send("hello");
});

app.get("/contacts", (req,res) => {
    res.send("<h2>Contacts page here</h2>");
});

app.get("/about", (req,res) => {
    res.send("<h2>About page here<h2>");
});

app.listen( port , () => {
    console.log("server working on port 3000");
});




// *********************
// Let’s practice using Postman. Make sure your server is running with nodemon.
// Then test the 5 different routes below with Postman. Open a separate tab for each request.
// Check that for each route you’re getting the correct status code returned to you from your server.
// You should not get any 404s or 500 status codes.
// *********************


app.post("/register", (req, res) => {
  //Do something with the data
  res.sendStatus(201);
});

app.put("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/angela", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/angela", (req, res) => {
  //Deleting
  res.sendStatus(200);
});
