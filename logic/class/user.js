import Storage from "../storage.js";

class User{
    constructor(name, email, password, balance = 0){  
        this.id = Storage.getNextId('user-id');
        this.name = name;
        this.email = email;
        this.password = password;
        this.balance = balance;
        this.products = [];
    }
    addProduct(productId) {
        this.products.push(productId);
    }
    removeProduct(productId) {
        this.products.filter(p => p.id === productId);
    }
}

export default User;