import express from "express"

const app = express();
const port = 3000;

//comands for each type of request
//get root file "/" and how to respond between {}
app.get("/", (req, res) => {
    res.send("hello")
} )

//start a server listening, is listening on port 3000 and has a callback fucntion
app.listen( port, () => {
    console.log("Server Running on port 3000.");
})