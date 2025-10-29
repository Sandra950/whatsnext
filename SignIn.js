document.addEventListener("DOMContentLoaded", () => {
    const signinForm = document.getElementById("signinForm");
    const errorMsg = document.getElementById("errorMsg");

    signinForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const matchedUser = users.find(user => user.email === email && user.password === password);

        if (matchedUser) {
            // Save login state and user data
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify(matchedUser));

            // Immediate redirect to tasks page
            window.location.href = "tasks.html";
        } else {
            errorMsg.style.display = "block";
        }
    });
});
