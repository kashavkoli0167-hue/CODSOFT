// Login button aur message element ko select kar rahe hain
const btn = document.querySelector("#loginBtn");
const msg = document.querySelector("#message");

// Login button click hone par function chalega
btn.onclick = () => {
  // Username aur password input se value le rahe hain (extra spaces remove karke)
  const u = document.querySelector("#username").value.trim();
  const p = document.querySelector("#password").value.trim();

  // Agar username ya password empty ho to error show karo
  if (!u || !p) {
    msg.textContent = "Enter username & Password !!!";
    msg.style.color = "red";
    return; // yahin stop kar do function
  }

  // localStorage se users list nikaal rahe hain
  // Agar kuch nahi mila to empty array le lo
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check kar rahe hain ki entered username/password kisi user se match karta hai ya nahi
  const valid = users.find(
    (user) => user.username === u && user.password === p,
  );

  // Agar valid user mil gaya
  if (valid) {
    // Logged-in username ko localStorage me save karo
    localStorage.setItem("loggedInUser", u);

    // Success message show karo
    msg.textContent = "Login successful !!!";
    msg.style.color = "lightgreen";

    // 1 second baad quiz list page par redirect karo
    setTimeout(() => (location.href = "quiz-list.html"), 1000);
  } else {
    // Agar user match nahi hua to error show karo
    msg.textContent = "Invalid username or Password !!!";
    msg.style.color = "red";
  }
};
