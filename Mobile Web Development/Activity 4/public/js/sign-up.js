const form = document.getElementById("signupForm");

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");

const emailInput = document.getElementById("email");
const genderInput = document.getElementById("gender");

const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const showPassword = document.getElementById("showPassword");

const message = document.getElementById("message");

showPassword.addEventListener("change", () => {
    const type = showPassword.checked ? "text" : "password";

    passwordInput.type = type;
    confirmPasswordInput.type = type;
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const gender = genderInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (
        !firstName ||
        !lastName ||
        !email ||
        !gender ||
        !password ||
        !confirmPassword
    ) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
        return;
    }

    if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters.";
        message.style.color = "red";

        passwordInput.value = "";
        confirmPasswordInput.value = "";

        passwordInput.focus();
        return;
    }

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";

        passwordInput.value = "";
        confirmPasswordInput.value = "";

        passwordInput.focus();
        return;
    }

    try {
        const response = await fetch(
            "/api/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    gender,
                    password
                })
            }
        );

        const data = await response.json();

        message.textContent = data.message;
        message.style.color = data.success ? "green" : "red";

        if (data.success) {
            setTimeout(() => {
                window.location.replace("/");
            }, 1500);
        }
    }
    catch (error) {
        console.error(error);

        message.textContent = "Server error.";
        message.style.color = "red";
    }
});