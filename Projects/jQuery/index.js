$("h1").css("color","red") 
// select h1 and change color prop to red 

//change the h1 based on key pressed 
$(document).keypress(function(event) {
    $("h1").text(event.key);
    HTMLFormControlsCollection.log(event.key)
})
