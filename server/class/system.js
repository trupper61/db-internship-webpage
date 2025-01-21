class System{
    constructor(){
        this.users = loadData();
        this.products = [];
    }
    addUser(user){
        this.users.push(user);
        saveData(this.users)
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

module.exports = System;