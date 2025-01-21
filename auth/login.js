// login.js
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function(e){
    e.preventDefault(); // Verhindert absenden Standard-Formular

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    console.log('Login Daten:', { email, password});
    alert('Login erfolgreich');
});