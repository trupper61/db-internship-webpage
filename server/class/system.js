import Storage from '../storage.js';
import Product from './product.js';
import User from './user.js';

class System{
    constructor(){
        this.users = this.getUsers();
        this.products = this.loadProducts();
        this.activeUser = null;
        this.loadActiveUser();
        this.productIdCounter = this.initializeProductIdCounter();
    }

    initializeProductIdCounter() {
        if (this.products.length === 0) return 1;
        const maxId = Math.max(...this.products.map(product => product.id));
        return maxId + 1;
    }

    generateProductId() {
        return this.productIdCounter++;
    }

    loadActiveUser(){
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            this.activeUser = loggedInUser;
        }
    }
    setActiveUser(email) {
        this.activeUser = email;
        this.activeUser = localStorage.setItem('loggedInUser', email);
    }
    addUser(user){
        this.users.push(user);
        this.saveUsers();
    }
    saveUsers() {
        Storage.saveObjToJson('user-items', this.users);
    }
    addProduct(product){
        product.id = this.generateProductId();
        this.products.push(product);
        this.saveProducts();
    }
    saveProducts() {
        Storage.saveObjToJson('product-items', this.products);
    }
    loadProducts() {
        const rawProducts = Storage.loadJsonToObj('product-items');
        return rawProducts.map(prod => new Product(prod.name, prod.price, prod.owner, prod.description, prod.id));
    }
    deleteProduct(productId){
        this.products = this.products.filter(p => p.id !== productId);
        this.saveProducts();
    }

    getUsers(){
        return Storage.loadJsonToObj('user-items');
    }
    loadUsers() {
        this.users = Storage.loadJsonToObj('user-items');
    }
    buyProduct(productId) {
        const user = this.users.find(u => u.email === this.activeUser);
        if (!this.activeUser) {
            alert("Log dich ein, um Produkte zu kaufen.");
            return;
        }
        const product = this.products.find(p => p.id.toString() === productId);
        if(!product) {
            alert("Produkt nicht gefunden");
            return;
        }
        if (product.owner === this.activeUser) {
            alert("Du kannst dein eigenes Produkt nicht kaufen");
            return;
        }
        if (user.balance < product.price) {
            alert("Du verfügst nicht über das benötigte Guthaben");
            return;
        }
        const oldOwner = this.users.find(u => u.email === product.owner);

        user.balance -= product.price;
        oldOwner.balance += product.price;

        product.owner = this.activeUser;
        this.saveProducts();
        this.saveUsers();
        
        //alert(`${user.name} hat das Produkt "${product.name}" erfolgreich gekauft von ${oldOwner.name}`);
    }
}

export default System;