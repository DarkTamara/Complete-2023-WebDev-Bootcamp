let randomNumber;
let buttonColours = ["red", "blue", "green", "yellow"];
let randomChosenColour;
let gameStarted = false;
let level = 0;
// the game patterns stored here
let gamePattern = [];
let userClickedPattern = [];

//random number between 1 and 4
function nextSequence(){
    level = ++level;
    $('#level-title').text("Level " + level);
    randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    animatePress(randomChosenColour);
    playSound(randomChosenColour);

};

//clicked btn
$('div[type="button"]' ).click( (e) => {
    let userChosenColour = e.currentTarget.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer();
});


function playSound(name){
            var audio = new Audio('./sounds/' + name +'.mp3');
            audio.play();
};
function animatePress(currentColour){
        $("#" + currentColour).addClass('pressed');

        setTimeout( () => {
            $("#" + currentColour).removeClass('pressed');
        }, 100);
};


// game setup
$(document).keydown(function (e) { 
    if (gameStarted === false){
        gameStarted = true;
        nextSequence();
    }
});

// check user answer 
function checkAnswer(){
    let userMove = userClickedPattern.length -1;
    console.log(userMove)

    if( gamePattern[userMove] !== userClickedPattern[userMove] ){
        //reset game
        console.log('reset the game here')
        gamePattern = [];
        userClickedPattern = [];
        gameStarted = false;
        level = 0;

        playSound('wrong');
        $('body').addClass("game-over");
        setTimeout( () => {
            $('body').removeClass("game-over");
        }, 200);
        $('#level-title').text("Game Over, Press Any Key to Restart ");

    //check if end of sequence
    } else if( gamePattern.length == userClickedPattern.length ){
        console.log('last element correct add elements');

        userClickedPattern = []; 
        setTimeout( () => {
            nextSequence();
        }, 1000 );

    }
}

