var startButton = document.querySelector("#button");
var correctAnswerCount = 0;
var wrongAnswerCount = 0;
// var timerCount = document.querySelector();
// var secondsRemaining = 1111;
// var gameInProgross = false;

var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above",
        ],
        answer: "all of the above",
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes",
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log",
    },
];

function showQuestion(){
    startButton.addEventListener("click", showQuestionOne )
    startButton.addEventListener("click",)  // timerCount)
}

var i = 0
//function to show question 1
function showQuestionOne(){
    if(i >= questions.length){
        endGame()
        return
    }

    document.getElementById('titles').innerHTML =
    `<p>${questions[i].title}</p>`

    document.getElementById('choices').innerHTML =
    `
    <button>${questions[i].choices[0]}</button>
    <button>${questions[i].choices[1]}</button>
    <button>${questions[i].choices[2]}</button>
    <button>${questions[i].choices[3]}</button>
    `

}
function checkAnswer(){
    document.querySelector("#choices").addEventListener("click", function(e){
            var choice = e.target.innerText
            console.log(choice)
            if(i >= questions.length){
                endGame()
            }
            if(choice  == questions[i].answer){
                console.log('correct')
                correctAnswerCount = correctAnswerCount +1
                document.getElementById('checkright').innerHTML=
                "correct!"
            }else{console.log('wrong')
            wrongAnswerCount = wrongAnswerCount +1
            document.getElementById('checkright').innerHTML=
                "wrong!"
        }
        i++
        showQuestionOne()
        console.log(correctAnswerCount)
    })
}

function endGame(){
    var finalScore = correctAnswerCount + "/5";
    document.querySelector("#finalscore").innerHTML = "Final Score: " + finalScore
    var startButton = document.createElement("button")
    startButton.innerHTML = "Start Quize Again!"
    document.querySelector("#startagain").appendChild(startButton)
}

    

checkAnswer()
//function to check answer


showQuestion()


// function timerCount(){
//     var countdown = setInterval(function(){
//         secondsRemaining--;
//         timerCount.textContent = secondsRemaining;
//         if( secondsRemaining <= 0){
//             endGame()
//         }

//     },1000)
//     gameInProgross = true;
// }

// document.body.addEventListener("keydown", function(event)){

// }



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