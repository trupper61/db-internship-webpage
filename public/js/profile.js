import System from "../../server/class/system.js";

// Profile
const sys = new System();


const loggedInUser = sys.activeUser;
const addBalanceForm = document.getElementById('add-balance-form');
const addBalanceInput = document.getElementById('balance-input');
const profileBalance = document.getElementById('user-balance');
const profileEmail = document.getElementById('profile-email');
const profileName = document.getElementById('profile-name');

function displayProfile() {
    if (loggedInUser) {
        const user = sys.users.find(u => u.email === sys.activeUser);
        if (user) {
            profileEmail.textContent = user.email;
            profileName.textContent = user.name;
            profileBalance.textContent = user.balance;
    
            const profileLink = document.getElementById('profile-item');
            profileLink.addEventListener('click', function () {
                localStorage.removeItem('loggedInUser');
                window.location.href = '../../index.html';
            });
        }
    }
    
}

addBalanceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(addBalanceInput.value);
    const user = sys.users.find(u => u.email === sys.activeUser);
    if (user) {
        user.balance += amount;
        sys.saveUsers();
        profileBalance.textContent = user.balance;
        alert(`Guthaben erfolgreich aufgeladen! Neuer Kontostand: ${user.balance}€`);
        addBalanceInput.value = '';
        displayProfile();
    }
})

displayProfile();
