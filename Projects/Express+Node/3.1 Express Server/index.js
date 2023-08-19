import express from "express"

const app = express();
const port = 3000;

//satrt a server listening, is listening on port 3000 and has a callback fucntion
app.listen( port, () => {
    console.log("Server Running on port 3000.");
})