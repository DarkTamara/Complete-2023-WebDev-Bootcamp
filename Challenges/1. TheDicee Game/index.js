
var first = 6;
var second = 6; 


function  randomNumberOne( item ){

    var randomNumber1 = Math.ceil(Math.random() * 6 ) ;
    var element = document.querySelector(item);

    switch(randomNumber1) {
        case 1:
            element.setAttribute("src","./images/dice1.png");
          break;
        case 2:
            element.setAttribute("src","./images/dice2.png");
        break;
        case 3:
            element.setAttribute("src","./images/dice3.png");
        break;
        case 4:
            element.setAttribute("src","./images/dice4.png");
        break;
        case 5:
            element.setAttribute("src","./images/dice5.png");
        break;
        case 6:
            element.setAttribute("src","./images/dice6.png");
        break;
    }

    if ( item.split("")[item.length - 1] == "1"){
        first = randomNumber1;
    } else {
        second = randomNumber1;
    };

    var heading = document.getElementsByTagName("h1")[0];
    if ( first > second ){
        heading.innerHTML = "Player 1 won!";
    } else if ( first < second ){
        heading.innerHTML = "Player 2 won!";
    } else {
        heading.innerHTML = "Draw";
    }


}



