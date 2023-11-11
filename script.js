document.addEventListener('DOMContentLoaded', function() {
    // Ensure the DOM is fully loaded before attaching event listeners

    document.getElementById('createAccountBtn').addEventListener('click', openSignUpForm);
    document.getElementById('signupForm').addEventListener('submit', handleSignUp);
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
});

function openSignUpForm() {
    document.getElementById('signupForm').classList.remove('hidden');
}

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform login validation, and if successful, store data in localStorage
    if (/* Your login validation logic */) {
        localStorage.setItem('username', username);
        alert('Login successful!');
    } else {
        alert('Login failed. Please check your credentials.');
    }
}

function handleSignUp(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('newPassword').value;

    // Perform signup validation, and if successful, store data in localStorage
    if (/* Your signup validation logic */) {
        localStorage.setItem('username', newUsername);
        localStorage.setItem('email', email);
        localStorage.setItem('password', newPassword);
        alert('Account created successfully!');
    } else {
        alert('Signup failed. Please check your input.');
    }
}
