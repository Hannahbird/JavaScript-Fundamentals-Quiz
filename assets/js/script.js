var beginButton = document.getElementById("#begin");
var questionEl = document.getElementById("#questionEl");
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
        correctAnswer: "JavaScript",
    },
  ];
var answerEl = document.querySelector(".answerBtns");
var nextBtn = document.getElementById("#next");
var quizEl = document.getElementById("#quizEl");
var highScores = document.getElementById("#highscores");
var questionContainerEl = document.getElementById("#quizCont");
var card = document.querySelector(".card")
var twoMins = 60 * 2,
  display = document.querySelector("#timer");
  var score = 0;
var currentIndex = 0;

