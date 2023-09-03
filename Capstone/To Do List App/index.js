import express from "express";
import bodyParser from "body-parser";

//consts
const port = 3000;
const app = express();


//functions


//middleware 
app.use(express.static("public")); // static files import 
app.use(bodyParser.urlencoded({ extended: true })); //parse body 


//requests 
app.get("/", (req, res) => {
    res.render("index.ejs",{ listsNames : listsNames, listTasks :  listTasks_1});
});

app.get("/dailyTasks_list", (req, res) => {
    res.render("index.ejs",{ listsNames : listsNames, listTasks :  listTasks_1});
});

app.get("/workTasks_list", (req, res) => {
    res.render("index.ejs",{ listsNames : listsNames, listTasks :  listTasks_2});
});

app.get("/toDo_list", (req, res) => {
    res.render("index.ejs",{ listsNames : listsNames, listTasks :  listTasks_3});
});

app.get("/add", (req, res) => {
    res.render("editModal.ejs");
});




//listen
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });


//database 
var listTasks_1 = [
    {   title:"task 1",
        info: "info 1"},
    {   title:"task 1",
        info: "info 1"}   
];
var listTasks_2 = [
    {   title:"task 1",
        info: "info 1"},
    {   title:"task 1",
        info: "info 1"},
    {   title:"task 1",
        info: "info 1"},
    {   title:"task 1",
        info: "info 1"} 
];
var listTasks_3 = [
    {   title:"task 1",
        info: "info 1"},
    {   title:"task 1",
        info: "info 1"},
    {   title:"task 1",
        info: "info 1"} 
];
const listsNames = 
    [
        {   listName :"Daily Tasks",
            id: "dailyTasks_list",
            name : "dailyTasks_list",
            value : "/dailyTasks_list"  },
        {   listName :"Work Tasks",
            id: "workTasks_list",
            name : "workTasks_list",
            value : "/workTasks_list"  },
        {   listName :"To do",
            id: "toDo_list",
            name : "toDo_list",
            value : "/toDo_list"   },
    ];
