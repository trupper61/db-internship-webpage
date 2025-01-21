import { sys } from "../main.js";

// login.js
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

loginForm.addEventListener('submit', function(e){
    e.preventDefault(); // Verhindert absenden Standard-Formular

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    sys.users.forEach(user => {
        if (user.email === email && user.password === password){
            sys.activeUser = user;
            console.log('Login Daten:', { email, password});
            alert('Login erfolgreich');
            return;
        }
    });
   console.log("Falsche login Eingabe!"); 
});