import { sys } from "../main.js";
import User from "../class/user.js";
import System from "../class/system.js";

// register.js

const nameInput = document.getElementById('name');
const registerForm = document.getElementById('registerForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorMessage = document.getElementById('error-message');

registerForm.addEventListener('submit', function(e){
    e.preventDefault();

    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();

    if (password !== confirmPassword){
        errorMessage.textContent = 'Die Passwörter stimmen nicht überein.'
        errorMessage.style.display = 'block';
        return;
    }

    if (password.length < 6){
        errorMessage.textContent = 'Das Passwort muss mindestens 6 Zeichen lang sein.';
        errorMessage.style.display = 'block';
        return;
    }

    sys.addUser(new User(name, email, password, "0"));


    alert('Registrierung erfolgreich!');
});