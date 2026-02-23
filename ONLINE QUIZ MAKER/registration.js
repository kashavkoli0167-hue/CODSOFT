// Register button aur message element ko select kar rahe hain
const btn = document.querySelector("#registerBtn");
const msg = document.querySelector("#message");

// Register button click hone par function chalega
btn.onclick = () => {
  // Input fields se username aur password le rahe hain (spaces remove karke)
  let username = document.querySelector("#username").value.trim();
  let password = document.querySelector("#password").value.trim();

  // Check: agar koi field empty ho to error dikhao
  if (!username || !password) {
    msg.textContent = "Enter username & password!!!";
    msg.style.color = "red";
    return; // function yahin stop
  }

  // localStorage se existing users list lo (agar na mile to empty array)
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Check: username already exist karta hai ya nahi
  if (users.find((u) => u.username === username)) {
    msg.textContent = "Username already exists!!!";
    msg.style.color = "red";
    return;
  }

  // Naya user array me add karo
  users.push({ username, password });

  // Updated users list ko dobara localStorage me save karo
  localStorage.setItem("users", JSON.stringify(users));

  // Success message show karo
  msg.textContent = "Registered! Redirecting...";
  msg.style.color = "lightgreen";

  // 1 second baad login page par redirect karo
  setTimeout(() => (location.href = "login.html"), 1000);
};
