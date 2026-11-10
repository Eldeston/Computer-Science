const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const message = document.getElementById("message");
const signupBtn = document.getElementById("signupBtn");
const showPassword = document.getElementById("showPassword");

signupBtn.addEventListener("click", () => {
    window.location.replace("sign-up.html");
});

showPassword.addEventListener("change", () => {
    passwordInput.type = showPassword.checked ? "text" : "password";
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (!email || !password) {
        message.textContent = "Enter an email and password.";
        message.style.color = "red";
        return;
    }

    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        if (!response.ok && response.status !== 401) {
            throw new Error("Server error");
        }

        const data = await response.json();

        if (data.success) {
            message.textContent = "Login successful!";
            message.style.color = "green";

            window.location.href = `planner.html?email=${encodeURIComponent(data.email)}`;
        } else {
            message.textContent = data.message;
            message.style.color = "red";

            passwordInput.value = "";
            passwordInput.focus();
        }
    } catch (error) {
        console.error(error);

        message.textContent = "Server error.";
        message.style.color = "red";
    }
});