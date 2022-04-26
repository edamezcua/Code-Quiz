var timer = document.getElementById('time');
var questionsDiv = document.getElementById('questionsDiv');
var questionsEl = document.getElementById('questions');
var choicesUl = document.getElementById('choicesUl');
var intialsEl = document.getElementById('initials')
var currentQIndex = 0; 
var save = document.getElementById('savedScore')
var time = 100;
var timerId;

//if the index is equal to the length of the array
var questions = [
    {
        qTitle: "Commonly used data types DO NOT include:",
        choicesUl: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        qTitle: "The condition in an if / else statement is enclosed within ____.",
        choicesUl: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        qTitle: "Arrays in Javascript can be used to store ____.",
        choicesUl: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        qTitle: "String values must be enclosed within ____ when being assigned to variables.",
        choicesUl: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        qTitle: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choicesUl:   ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];
function displayScore(){
    console.log('here')
    var highscoresEl = JSON.parse(localStorage.getItem('highscores'))|| []

    highscores.sort(function(a, b){
        return b.score - a.score 
    })

    highscores.forEach(function(score){
        console.log(score)
        var liTag = document.createElement('li');
        liTag.textContent = score.intials + " - " + score.score

        var savedScore = document.getElementById('savedScore');
        savedScore.appendChild(liTag)

    })
}

function score(){
    var intials = intialsEl.value.trim();

    var highscores = JSON.parse(localStorage.getItem('highscores'))|| []

    var newScore = {
        score: time,
        intials: intials
    }

    highscores.push(newScore);
    localStorage.setItem('highscores', JSON.stringify(highscores));


    //redirect to high score page
    window.location.href = 'highscores.html'
    //I think we need to use setAttribute here 
}

function  checkAnswer(){
    if (this.value !== questions[currentQIndex].answer){
        time -= 15;
        if (time < 0){
            time = 0;
        }
        timer.textContent = time;
    } else {
        console.log('here at check answer')
        currentQIndex++
        console.log(currentQIndex)

    }
    if (currentQIndex === questions.length){
        quizQuit();
    } else {
        getQuestion();
    }
}

function getQuestion(){
    var currentQuestion = questions[currentQIndex];
    var title = document.getElementById('qTitle');
    title.textContent = currentQuestion.qTitle;
    choicesUl.innerHTML = '';

    currentQuestion.choicesUl.forEach(function(choice){
        var choicebtn = document.createElement('button');
        choicebtn.setAttribute("value", choice)
        choicebtn.textContent = choice
        choicebtn.onclick = checkAnswer;
        choicesUl.appendChild(choicebtn)

    })
}

function quizQuit(){
    clearInterval(timerId);

    var endGameEl = document.getElementById('endGameEl');
    endGameEl.removeAttribute('class');
    var score = document.getElementById('score');
    score.textContent = time;
    questionsEl.setAttribute('class', 'hide');
}  

function timeTick(){
    time--
    timer.textContent = time;

    if (time <= 0) {
        quizQuit();
    }
}

function start(){
    
    questionsDiv.setAttribute('class', 'hide');
    questionsEl.removeAttribute('class', 'hide')
    //choicebtn.setAttricute("value")
    

    timerId = setInterval(timeTick, 1000);
    timer.textContent = time;
    console.log('here');
    getQuestion();

}

document.getElementById('submit').addEventListener("click", score);

document.getElementById('startTime').addEventListener("click", start);