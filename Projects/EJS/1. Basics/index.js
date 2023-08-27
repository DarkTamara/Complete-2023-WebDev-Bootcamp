
import express from "express";

// variables
const port = 3000;
const app = express();
let day = new Date().getDay();
let dayType = "a weekday";
let advice = "it's time to work hard ";

// functions
function setDayAdvice(res, req, next){
    console.log (day)
    if ( day == 0 || day == 6){
        dayType = "weekend";
        advice = "it's time to party";
    };
    next();
}

//middleware
app.use(setDayAdvice)

// requests 

// sending data to the template to be rendered 
app.get("/", (req, res) => {
    // this looks for a folder named views by default 
    res.render( 'index.ejs', 
    {dayType: dayType , 
    advice: advice});
})

//listen 
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
