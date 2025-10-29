const form = document.getElementById("signupForm");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fullname = document.getElementById("fullname").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!fullname || !phone.match(/^[0-9]{10}$/) || !gender || !email.includes("@") || password.length < 6) {
    errorMsg.classList.add("show");
    return;
  }

  errorMsg.classList.remove("show");

  // Get existing users or create empty array
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    alert("⚠️ Email already registered! Please sign in instead.");
    window.location.href = "SignIn.html";
    return;
  }

  // Save new user
  const newUser = { fullname, phone, gender, email, password };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("🎉 Account created successfully!");
  window.location.href = "SignIn.html";
});
