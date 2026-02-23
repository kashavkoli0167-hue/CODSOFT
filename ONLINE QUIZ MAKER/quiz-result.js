// ➜ Get saved score data from localStorage (convert to numbers)
const score = Number(localStorage.getItem("quizscore"));
const total = Number(localStorage.getItem("quizTotal"));

// ➜ Select DOM elements to display result
const resultText = document.getElementById("resultText");
const percentText = document.getElementById("percentText");
const message = document.getElementById("message");

// ➜ Show score on screen
resultText.textContent = `Score: ${score} / ${total}`;

// ➜ Calculate percentage and round to nearest integer
const percent = Math.round((score / total) * 100);
percentText.textContent = `Percentage: ${percent}%`;

// ➜ Display performance message based on percentage
if (percent >= 80) {
  message.textContent = "🔥 Excellent!";
} else if (percent >= 50) {
  message.textContent = "👍 Good job!";
} else {
  message.textContent = "😅 Try again!";
}

// ➜ Restart quiz: clear stored result and go back to quiz page
function restartQuiz() {
  localStorage.removeItem("quizscore");
  localStorage.removeItem("quizTotal");
  location.href = "take-quiz.html";
}
