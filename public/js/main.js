import User from '../../logic/class/user.js';
import Admin from '../../logic/class/admin.js';
import System from '../../logic/class/system.js';
import Storage from '../../logic/storage.js';
import Product from '../../logic/class/product.js';

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

        const usera = new User('John Doe', 'john@gmail.com', 'password123', 500);
        const userb = new User('Jane Smith', 'jane@gmail.com', 'password456', 300);
        const userc = new User('Alice Cooper', 'alice@gmail.com', 'mypassword789', 1000);
        const userd = new User('Bob Marley', 'bob@gmail.com', 'securepassword987', 1200);
        const usere = new User('Charlie Brown', 'charlie@gmail.com', 'charliepassword2025', 450);
        
        sys.addUser(usera);
        sys.addUser(userb);
        sys.addUser(userc);
        sys.addUser(userd);
        sys.addUser(usere);

        sys.addProduct(new Product('Laptop', 999, usera.email, 'Very handy gadget'));
        sys.addProduct(new Product('Stuhl', 3299, usera.email, 'Ein veehrtes Heilligtum'));
        sys.addProduct(new Product('Tisch', 421, userb.email, 'Am praktischsten mit vier Beinen'));
        sys.addProduct(new Product('Fernseher', 9320, userb.email, 'Crazy 16k Bildschirm, benötigt neuste Grafikkarte'));
        sys.addProduct(new Product('Smartphone', 799, userc.email, 'Neustes iPhone, wasserfest und mit fantastischer Kamera'));
        sys.addProduct(new Product('Küche', 5999, userc.email, 'Moderne, voll ausgestattete Küche für wahre Feinschmecker'));
        sys.addProduct(new Product('Sofa', 1500, userd.email, 'Super bequem, ideal für lange Filmabende'));
        sys.addProduct(new Product('Taschenlampe', 15, userd.email, 'Hochleistungstaschenlampe für alle Outdoor-Aktivitäten'));
        sys.addProduct(new Product('Fahrrad', 450, usere.email, 'Sportliches, leichtes Fahrrad für Stadt und Land'));
        sys.addProduct(new Product('Kamera', 1250, usere.email, 'Digitale Spiegelreflexkamera, ideal für professionelle Aufnahmen'));
        sys.addProduct(new Product('Beamer', 899, userc.email, 'Perfekte Lösung für Heimkino-Liebhaber'));
        sys.addProduct(new Product('Grill', 399, userd.email, 'Hochwertiger Grill für das perfekte BBQ mit Freunden'));
        sys.addProduct(new Product('E-Book Reader', 129, userb.email, 'E-Book Reader mit 8 GB Speicher und langer Akkulaufzeit'));
        sys.addProduct(new Product('Schreibtischlampe', 49, usera.email, 'Stylische und dimmbare Lampe für den Schreibtisch'));

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