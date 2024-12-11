// Ẩn/Hiện password
function togglePassword(fieldId) {
    const field = document.getElementById(fieldId);
    const icon = field.nextElementSibling.querySelector("i");
    if (field.type === "password") {
        field.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        field.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

// ERROR
function showError(field, message) {
    const errorDiv = field.nextElementSibling;
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
    errorDiv.style.color = "red";
    field.classList.add("error");
}

function removeError(field) {
    const errorDiv = field.nextElementSibling;
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
    field.classList.remove("error");
}

// CHECK EMAIL
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function handleRegister() {
    const email = document.getElementById("register-email");
    const username = document.getElementById("register-username");
    const password = document.getElementById("register-password");
    const confirmPassword = document.getElementById("register-confirm-password");

    let isValid = true;

// Validate email
    if (!email.value.trim()) {
        showError(email, "Email is required.");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, "Invalid email format.");
        isValid = false;
    } else {
        removeError(email);
    }

    if (!username.value.trim()) {
        showError(username, "Username is required.");
        isValid = false;
    } else {
        removeError(username);
    }

// Validate password
    if (!password.value.trim()) {
        showError(password, "Password is required.");
        isValid = false;
    } else {
        removeError(password);
    }

// Validate confirm password
    if (!confirmPassword.value.trim()) {
        showError(confirmPassword, "Confirm Password is required.");
        isValid = false;
    } else if (confirmPassword.value.trim() !== password.value.trim()) {
        showError(confirmPassword, "Passwords do not match.");
        isValid = false;
    } else {
        removeError(confirmPassword);
    }

    if (isValid) {
// register (localStorage)
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.some((user) => user.email === email.value.trim());

        if (userExists) {
            alert("User already exists with this email!");
        } else {
            users.push({
                email: email.value.trim(),
                username: username.value.trim(),
                password: password.value.trim(),
            });

            localStorage.setItem("users", JSON.stringify(users));
            alert("Registration successful! Login to your account to access the website!");
            window.location.reload();
        }

    }
}
loginForm.querySelector('input').focus();

// Login
function handleLogin() {
    const email = document.getElementById("login-email");
    const password = document.getElementById("login-password");

    let isValid = true;

    // Validate email
    if (!email.value.trim()) {
        showError(email, "Email is required.");
        isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
        showError(email, "Invalid email format.");
        isValid = false;
    } else {
        removeError(email);
    }

    // Validate password
    if (!password.value.trim()) {
        showError(password, "Password is required.");
        isValid = false;
    } else {
        removeError(password);
    }

    if (isValid) {
        // Check user in localStorage
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
            (user) =>
                user.email === email.value.trim() &&
                user.password === password.value.trim()
        );

        if (user) { 
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            alert(`Login successful! Welcome, ${user.username}`);
            window.location.href = "index.html";
        } else {
            alert("Invalid email or password.");
        }
    }
}


















