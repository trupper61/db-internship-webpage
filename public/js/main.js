import User from '../../server/class/user.js';
import Admin from '../../server/class/admin.js';
import System from '../../server/class/system.js';
import Storage from '../../server/storage.js';

//window.localStorage.clear();

let sys = new System;
initialize();

console.log(Storage.loadJsonToObj());

function initialize() {
    if (sys.getUsers().length === 0) {
        console.log('Keine Benutzer');
        localStorage.setItem('user-id-counter', '0');

        const admin = new Admin('Admin', 'admin@localhost', 'admin123', 1000);
        sys.addUser(admin);

        const usera = new User('John Doe', 'john@localhost', 'password123', 500);
        const userb = new User('Jane Smith', 'jane@localhost', 'password456', 300);
        sys.addUser(usera);
        sys.addUser(userb);

        console.log('Standard-User generiert');
    }
    else {
        console.log('Benutzer bereits vorhanden')
    }
}
function resetStorage() {
    window.localStorage.clear();
    console.log('Storage Resettet');
    sys.loadUsers();
    initialize();
}

window.resetStorage = resetStorage;