import User from "./user.js";
import Product from "./product.js";

class System{
    constructor(){
        this.users = new [];
        this.products = new [];
    }
    addUser(user){
        this.users.push(user);
        console.log('Benutzer "${user.name}" wurde dem System hinzugefügt');
    }
    addProduct(product){
        this.products.push(product);
        console.log('Produkt "${product.name}" wurde dem System hinzugefügt');
    }
    deleteProduct(product){
        this.products = this.products.filter(p => p !== product);
        console.log('Produkt "${product.name}" wurde gelöscht');
    }
    getUserByEmail(email){
        return this.users.find(user => user.email === email);
    }
}

export default System;