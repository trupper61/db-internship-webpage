// register.js
import User from "../../server/class/user.js";
import System from "../../server/class/system.js";

let sys = new System();

const registerForm = document.getElementById('registerForm');
const nameInput = document.getElementById('name');
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

    
    if (sys.users.some(user => user.email === email)) {
        errorMessage.textContent = 'Ein Benutzer mit dieser E-Mail-Adresse existiert bereits.';
        errorMessage.style.display = 'block';
        return;
    }

    try {
        sys.addUser(new User(name, email, password));
    } catch (error) {
        errorMessage.textContent = `Registrierung fehlgeschlagen: ${error.message}`;
        errorMessage.style.display = 'block';
        console.log(error);
        return;
    }
    alert("Registrierung erfolgreich")
    registerForm.reset();
    window.location.href = './login.html';  
});
