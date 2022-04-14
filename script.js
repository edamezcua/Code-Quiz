var timer = document.getElementById('time');
var questionsDiv = document.getElementById('questionsDiv');
var questionsEl = document.getElementById('questions');
var currentQIndex = 0; 
var time = 10;
var timerId;


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
        choicesUl: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

document.getElementById('startTime').addEventListener("click", start);

//question[0].qTitle = "whats up"
function getQuestion(){
    var currentQuestion = questions[currentQIndex];
    var title = document.getElementById('qTitle');
    title.textContent = currentQuestion.qTitle
}

function quizQuit(){
    clearInterval(timerId);
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
    

    timerId = setInterval(timeTick, 1000);
    timer.textContent = time;
    console.log('here');
    getQuestion();

}

