// script.js
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Simulasi autentikasi sederhana
    if (username === 'admin' && password === 'password123') {
        loginMessage.textContent = 'Login successful!';
        loginMessage.style.color = 'green';
    } else {
        loginMessage.textContent = 'Invalid username or password';
        loginMessage.style.color = 'red';
    }
}
