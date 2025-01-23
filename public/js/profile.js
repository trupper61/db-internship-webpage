import System from "../../server/class/system.js";

// Profile
const sys = new System();


const usernameElement = document.getElementById('username');
const loggedInUser = sys.activeUser;

if (loggedInUser) {
    usernameElement.textContent = `Hallo, ${loggedInUser}`;

    const profileLink = document.getElementById('profile-item');
    profileLink.addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        window.location.href = '../../index.html';
    });
}
