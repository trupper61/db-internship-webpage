import System from "../../logic/class/system.js";
// login.js
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

let sys = new System();
console.log(sys.getUsers());
loginForm.addEventListener('submit', function(e){
    e.preventDefault(); // Verhindert absenden Standard-Formular

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    for (const user of sys.getUsers()) {
        if (user.email === email && user.password === password) {
            alert(`Login erfolgreich: Willkommen, ${user.name}!`);
            sys.setActiveUser(user.email);
            window.location.href = '../../index.html';
            return;
        }
    }
    console.log(window.localStorage.getItem('user-items'));

    alert("Falsche Logineingaben");
});

