document.addEventListener("DOMContentLoaded", () => {
  // ✅ Redirect if already logged in
  if (localStorage.getItem("isLoggedIn") === "true") {
    window.location.href = "tasks.html";
    return; // stop executing the rest
  }

  const signinForm = document.getElementById("signinForm");
  const errorMsg = document.getElementById("errorMsg");

  signinForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Get stored users
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (!Array.isArray(users)) users = [];

    // Match user credential
    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (matchedUser) {
      // Store login session
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(matchedUser));

      // Redirect to tasks page
      setTimeout(() => {
        window.location.href = "tasks.html";
      }, 300);
    } else {
      // Show scary red error message
      errorMsg.style.display = "block";
      errorMsg.textContent = "❌ Wrong email or password. Try again!";
    }
  });
});
