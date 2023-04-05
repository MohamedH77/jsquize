var startButton = document.querySelector();
var timerCount = document.querySelector();
var questions = [""];
var secondsRemaining = 1111;
var gameInProgross = false;

function timerCount(){
    var countdown = setInterval(function(){
        secondsRemaining--;
        timerCount.textContent = secondsRemaining;
        if( secondsRemaining <= 0){
            endGame()
        }

    },1000)
    gameInProgross = true;
}

document.body.addEventListener("keydown", function(event)){

}



/*
// event listener for the start button
// start timmer
//list of questions
//event listener for keypress
// keep track of clicks
// correct or incorrect resault
// final resault
// localstorage wins and losses
*/