import User from '../../server/class/user.js';
import Admin from '../../server/class/admin.js';
import System from '../../server/class/system.js';
import Storage from '../../server/storage.js';
import Product from '../../server/class/product.js';

//window.localStorage.clear();

let sys = new System;
initialize();
updateProfile();

function updateProfile() {
    const profileLink = document.getElementById('profile-item');
    const loggedInUser = sys.activeUser;
    const balanceElement = document.getElementById('user-balance');
    if (loggedInUser) {
        const user = sys.users.find(u => u.email === loggedInUser);
        profileLink.textContent = `${user.name}'s Profil`;
        balanceElement.textContent = `Guthaben: ${user.balance}€`;
        balanceElement.style.display = 'inline-block';
    } else {
        profileLink.textContent = 'Anmelden';
        profileLink.href = './public/pages/login.html';
        balanceElement.style.display = 'none';
    }
}
console.log(sys.getUsers());

function initialize() {
    if (sys.getUsers().length === 0) {
        console.log('Keine Benutzer');
        Storage.resetIds('user-id');
        Storage.resetIds('product-id');

        const admin = new Admin('Admin', 'admin@localhost', 'admin123', 1000);
        sys.addUser(admin);

        const usera = new User('John Doe', 'john@localhost', 'password123', 500);
        const userb = new User('Jane Smith', 'jane@localhost', 'password456', 300);
        sys.addUser(usera);
        sys.addUser(userb);

        sys.addProduct(new Product('Laptop', 999, usera.email, 'Very handy gadget'));
        sys.addProduct(new Product('Stuhl', 3299, usera.email, 'Ein veehrtes Heilligtum'));
        sys.addProduct(new Product('Tisch', 421, userb.email, 'Am praktischsten mit vier Beinen'));
        sys.addProduct(new Product('Fernseher', 9320, userb.email, 'Crazy 16k Bildschirm, benötigt neuste Grafikkarte'));

        console.log('Standard-User generiert');
    }
    else {
        console.log('Benutzer bereits vorhanden')
    }
}
function resetStorage() {
    Storage.resetStorage(); 
    console.log('Storage Resettet');
    sys = new System;
    initialize();
    updateProfile();
    console.log(sys.getUsers());
    console.log(sys.loadProducts());
}

window.resetStorage = resetStorage;