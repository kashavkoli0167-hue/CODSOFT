// Temporary array to store questions before saving quiz
let questions = [];

// ➜ Add Question button click handler
document.querySelector("#addQuestion").onclick = () => {
  // Read input values (trim removes extra spaces)
  const q = document.getElementById("question").value.trim();
  const opts = document.querySelectorAll(".option");
  const correct = document.getElementById("correctAnswer").value.trim();

  // Convert NodeList of options into a normal array
  const options = [];
  opts.forEach((o) => options.push(o.value.trim()));

  // Validate: ensure question, options, and correct answer are filled
  if (!q || options.some((opt) => !opt) || !correct) {
    alert("Please fill all fields !!!");
    return;
  }

  // Add question object to temporary questions array
  questions.push({
    question: q,
    options: options,
    correct: correct,
  });

  alert("Question added ✅");

  // Clear inputs for next question
  document.getElementById("question").value = "";
  opts.forEach((o) => (o.value = ""));
  document.getElementById("correctAnswer").value = "";
};

// ➜ Save Quiz button click handler
document.getElementById("saveQuiz").onclick = () => {
  // Get quiz title
  const title = document.getElementById("quizTitle").value.trim();

  // Validate title exists
  if (!title) {
    alert("Please enter a quiz title");
    return;
  }

  // Ensure at least one question is added
  if (questions.length === 0) {
    alert("Please add at least one question first");
    return;
  }

  // Fetch existing quizzes from localStorage
  const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

  // Create new quiz object and add to list
  quizzes.push({
    title: title,
    questions: questions,
  });

  // Save updated quiz list back to localStorage
  localStorage.setItem("quizzes", JSON.stringify(quizzes));

  alert("Quiz Saved 🎉");

  // Redirect to quiz list page
  window.location.href = "quiz-list.html";
};
