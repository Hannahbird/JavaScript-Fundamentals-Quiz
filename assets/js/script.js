var beginBtn = document.getElementById("begin");
var questionEl = document.getElementById("questionEl");
var questionIndex = 0;
var questions = [
    {
      question: "Are You A Robot?",
      answers: ["No", "Yes", "Maybe", "Unsure?"],
      correctAnswer: "No",
    },
    {
      question: "It enables interactive web pages and thus is an essential part of web applications. A majority of websites use it and all major web browsers have a devoted ____ engine to execute it.",
      answers: ["CSS", "HTML", "Javascript", "JQuery"],
      correctAnswer: "JavaScript",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables",
        answers: ["Parenthesis", "Commas", "Backslashes", "Curly Brackets"],
        correctAnswer: "Curly Brackets",
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["Curly Brackets", "Quotes", "Parenthesis", "Periods"],
        correctAnswer: "Parenthesis",
    },
  ];
var answerEl = document.querySelector(".answerBtns");
var nextBtn = document.getElementById("next");
var quizEl = document.getElementById("quizEl");
var highScores = document.getElementById("highscores");
var questionContainerEl = document.getElementById("quizCont");
var score
var card = document.querySelector(".card")
var timeRemaining = 90
var display = document.querySelector("timer")
var currentIndex = 0;

display.textContent=timeLeft;

function displayQuestion() {
    console.log(questions[currentIndex].question);
}
displayQuestion();

// beginBtn.addEventListener("click", beginBtn);
// nextBtn.addEventListener("click", () => {
//   currentIndex++;
//   nextQ();
// });

beginBtn.addEventListener("click", function() {
  countdown();
  startQuiz(questions);
});

function startGame() {
  beginButton.classList.add("hide");
  card.classList.add("hide");
  quizEl.classList.remove("hide");
  highScores.classList.add("hide"); 
    timer = setInterval(display, 1000);
    
    nextQ();
}

function startTimer() {
  timeRemaining--  
  display.textContent = timeRemaining;
  if (timeRemaining <= 0) {
      endQuiz();
  }
}
  
function nextQ() {
  if (checkQuestionsLeft()=== false){
      endQuiz()
  } else {  
quizEl.classList.remove("wrong");
quizEl.classList.remove("correct");
answerEl.innerHTML = "";
questionEl.textContent = questions[currentIndex].question;
for (i = 0; i < 4; i++) {
  var choices = document.createElement("button");
  choices.setAttribute("class", "choice");
  choices.setAttribute("value", questions[currentIndex].answers[i]);
  choices.textContent = questions[currentIndex].answers[i];
  choices.onclick = chooseAnswer;
  answerEl.appendChild(choices);
}}
}

function endQuiz() {
  quizEl.classList.add("hide");
  card.classList.add("hide");
  highScores.classList.remove("hide");
  beginButton.classList.remove("hide");
  console.log("Quiz over");
  clearInterval(timer);
  score = timeRemaining

  function chooseAnswer() {
    if (this.value === questions[currentIndex].correctAnswer) {
      quizEl.classList.add("correct");
    } else {
      quizEl.classList.add("wrong");
      timeRemaining -= 25
    }

    $(document).ready(function() {
      $("#scoreBtn").click(function(){
          console.log("click")
          var highScores = $("input[name=playerInitials]").val() + " ---->  " + timeRemaining;
          $("ol").append("<li>" + highScores + "</li>");
      });
  });