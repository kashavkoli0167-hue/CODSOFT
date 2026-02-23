// localStorage se quizzes list fetch kar rahe hain (agar na mile to empty array)
const quizzes = JSON.parse(localStorage.getItem("quizzes")) || [];

// Quiz buttons show karne ke liye container select kar rahe hain
const quizList = document.querySelector("#quizList");

// Page par quizzes load karne ka function
function loadQuizzes() {
  // Pehle list clear kar do (duplicate buttons se bachne ke liye)
  quizList.innerHTML = "";

  // Har quiz ke liye ek button create karo
  quizzes.forEach((q, i) => {
    const btn = document.createElement("button");

    // Button par quiz ka title dikhao
    btn.textContent = q.title;

    // Button click hone par selected quiz index save karo
    // aur quiz attempt page par redirect karo
    btn.onclick = () => {
      localStorage.setItem("currentQuiz", i);
      window.location.href = "take-quiz.html";
    };

    // Button ko list container me add karo
    quizList.appendChild(btn);
  });
}

// Logout function: user session remove karke home page par bhejo
function logout() {
  localStorage.removeItem("loggedInUser"); 
  window.location.href = "index.html";
}

// Page load hote hi quizzes show karo
loadQuizzes();
