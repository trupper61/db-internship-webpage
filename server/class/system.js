import Storage from '../storage.js';
import Product from './product.js';
import User from './user.js';

class System{
    constructor(){
        this.users = this.getUsers();
        this.products = this.loadProducts();
        this.activeUser = null;
        this.loadActiveUser();
    }
    loadActiveUser(){
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            this.activeUser = loggedInUser;
        }
    }
    setActiveUser(name) {
        this.activeUser = name;
        this.activeUser = localStorage.setItem('loggedInUser', name);
    }
    addUser(user){
       this.users.push(user);
        Storage.saveObjToJson('user-items',this.users);
    }
    addProduct(product){
        this.products.push(product);
        this.saveProducts();
    }
    saveProducts() {
        Storage.saveObjToJson('product-items', this.products);
    }
    loadProducts() {
        const rawProducts = Storage.loadJsonToObj('product-items');
        return rawProducts.map(prod => new Product(prod.name, prod.price, prod.owner, prod.description));
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
}

export default System;