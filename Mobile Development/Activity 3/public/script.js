const form = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Demo credentials
    const validUsername = "student";
    const validPassword = "password123";

    if (username === validUsername && password === validPassword) {
        message.textContent = "Login successful!";
        message.style.color = "green";

        // Redirect after login
        // window.location.href = "dashboard.html";
    } else {
        message.textContent = "Invalid username or password.";
        message.style.color = "red";
    }

    passwordInput.value = "";
});
