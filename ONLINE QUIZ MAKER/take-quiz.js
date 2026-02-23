// Get quizzes data and selected quiz index from localStorage
const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];
const index = localStorage.getItem("currentQuiz");

// Select current quiz
const quiz = quizzes[index];

// If quiz not found, redirect back
if (!quiz) {
  alert("Quiz not found");
  location.href = "quiz-list.html";
}

// Track current question and score
let current = 0;
let score = 0;

// Select DOM elements
const title = document.getElementById("quizTitle");
const question = document.getElementById("question");
const option = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

// Show quiz title
title.textContent = quiz.title;

// Load current question on screen
function loadQuestion() {

  // Clear old options and hide next button
  option.innerHTML = "";
  nextBtn.style.display = "none";

  // Get current question object
  const q = quiz.questions[current];
  question.textContent = q.question;

  // Create buttons for each option
  q.options.forEach((opt, i) => {

    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.className = "option-btn";

    // On click check answer
    btn.onclick = () =>
      checkAnswer(i, Number(q.answer ?? q.correct));

    // Add button to options container (important to display it)
    option.appendChild(btn);
  });
}


// Check selected answer
function checkAnswer(selected, correct) {

  const allBtns = option.querySelectorAll("button");

  // Disable all buttons after selection
  allBtns.forEach((b) => (b.disabled = true));

  // Highlight correct/wrong answer and update score
  if (selected === correct) {
    score++;
    allBtns[selected].classList.add("correct");
  } else {
    allBtns[selected].classList.add("wrong");
    allBtns[correct].classList.add("correct");
  }

  // If more questions remain → show next button
  if (current < quiz.questions.length - 1) {
    nextBtn.style.display = "block";
  } else {

    // Save result in localStorage
    localStorage.setItem("quizscore", score);
    localStorage.setItem("quizTotal", quiz.questions.length);

    // Redirect to result page
    setTimeout(() => (location.href = "quiz-result.html"), 1000);
  }
}


// Next button → load next question
nextBtn.onclick = () => {
  current++;
  loadQuestion();
};

// Load first question initially
loadQuestion();