var score = 0;
var questionIndex = 0;
var timeLeft = 90;
var timeInterval = "";
var timerEl = document.getElementById("timer");
var quizEl = document.getElementById("quiz");
var startBtn = document.getElementById("start");
var timeOut = "Outta Time";
var penalty = "10";
var createOption = document.createElement("ul");

function startQuiz(questionIndex) {
    // clear 
        createOption.innerHTML = "";
        quizEl.innerHTML = "";
    
    // loop for questions
    for (var i = 0; i < questions.length; i++) {
        // display the question
        var questionName = questions[questionIndex].question;
        var questionAnswers = questions[questionIndex].answers;

        quizEl.textContent= questionName;
    }
    questionAnswers.forEach(function (newButton) {
        var optionList = document.createElement("button");
        optionList.textContent = newButton;
        optionList.setAttribute("id", "answers");
        quizEl.appendChild(createOption);
        createOption.appendChild(optionList);
        optionList.addEventListener("click", (correctAnswer));
    })
    };


    var questions = [
      {
        question: "Are You A Robot?",
        answers: ["No", "Yes", "Maybe", "Unsure?"],
        correctAnswer: "No",
      },
      {
        question: "It enables interactive web pages and thus is an essential part of web applications. A majority of websites use it and all major web browsers have a devoted ____ engine to execute it.",
        answers: ["CSS", "HTML", "JavaScript", "JQuery"],
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

    //start timer
    startBtn.addEventListener("click", function() {
        countdown();
        startQuiz(questionIndex);
    });

    function correctAnswer(event) {
        var element = event.target;
        console.log(element);

        if (element.matches("button")) {

            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "createDiv");
      
      // correct
              if (element.textContent == questions[questionIndex].correctAnswer) {
                  score ++;
                    alert("That's right! " + questions[questionIndex].correctAnswer);
              } else {

      // remove 10 seconds 
                  timeLeft = timeLeft - penalty;
                  alert("That's wrong. The correct answer is: " + questions[questionIndex].correctAnswer);
              }
      }
      questionIndex ++;

      // check if quiz is finished 
        if (questionIndex >= questions.length) {
            quizDone();
            createDiv.textContent = "GAME OVER. You scored: " + score + " answers correct.";    
          } else {
              startQuiz(questionIndex);                    
          }
          quizEl.appendChild(createDiv);
        }

      // quiz over
      function quizDone() {
        quizEl.innerHTML = "";
        stopCountdown();

      // notify quiz is over
      var titleEl = document.createElement("h1");
      titleEl.setAttribute("id", "titleEl");
      titleEl.textContent = "All done"
      quizEl.appendChild(titleEl);
      var rule = document.createElement("p");
      rule.setAttribute("id", "rule");
      quizEl.appendChild(rule);

      // time left + score
      if (timeLeft >= 0) {
          var timeRemaining = timeLeft;
          var pEl2 = document.createElement("p");
          pEl2.textContent = "Your final score is: " + timeRemaining;
          quizEl.appendChild(pEl2);
      }

      //puts score under initials
      var createLabel = document.createElement("label");
        createLabel.setAttribute("id", "createLabel");
        createLabel.textContent = "Enter your initials: ";
      quizEl.appendChild(createLabel);

      // capture initials
      var createInput = document.createElement("input");
      createInput.setAttribute("type", "text");
      createInput.setAttribute("id", "initials");
      createInput.textContent = "";
      quizEl.appendChild(createInput);

      // highscore link
      var createSubmit = document.createElement("button");
      createSubmit.setAttribute("type", "submit");
      createSubmit.setAttribute("id", "Submit");
      createSubmit.textContent = "Submit";
      quizEl.appendChild(createSubmit);

      // store high scores
      createSubmit.addEventListener("click", function () {
          var initials = createInput.value;
            if (!initials) {
              alert("Enter your initials")        
              console.log("No initials entered");
            } else {
              var finalScore = {
                  initials: initials,
                  score: timeRemaining
                }
                console.log(finalScore);
                var highScore = localStorage.getItem("highScore");
                if (highScore === null) {
                    highScore = [];
                } else {
                    highScore = JSON.parse(highScore);
                }
                    highScores.push(finalScore);
                    var newScore = JSON.stringify(highScore);
                    localStorage.setItem("highScore", newScore);

              // redirect to high scores
                  window.location.replace("./scoreSheet.html");
                }
            });
        
        };

        // timer function
        function countdown() { 
            timeInterval = setInterval(function() {
            if(timeLeft >= 1) {
                timerEl.textContent = "Time Left:  " + timeLeft;
                timeLeft -= 1;
            }
            else if(timeLeft === 0){
                timerEl.textContent = "";
                clearInterval(timeInterval);
                displayMessage();
                quizDone();
            }
        
            function displayMessage() {
                alert(timeOut);
            };
            }, 1000)
        }

            // stop timer function
            function stopCountdown() {
            clearInterval(timeInterval);
            timerEl.textContent = "Outta Time!"
            console.log("countdown stopped");
            console.log(timeInterval);
            }