var highScore = document.getElementById("highScore");
var clearScores = document.getElementById("clear");
var goBack = document.getElementById("backBtn");
//clear scores 
clearScores.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// display scores
var highScore = localStorage.getItem("highScore");
highScore = JSON.parse(highScore);
if (highScore !== null) {
    for (var i = 0; i < highScores.length; i++) {

        var createDiv = document.createElement("div");
        createDiv.textContent = highScores[i].initials + " " + highScores[i].score;
        createDiv.setAttribute("id", "highScore")
        highScore.appendChild(createDiv);
    }
}
// back to quiz
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});