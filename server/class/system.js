import Storage from '../storage.js';

class System{
    constructor(){
        this.users = Storage.loadJsonToObj('user-items');
        this.products = [];
        this.activeUser = null;
    }
    addUser(user){
       this.users.push(user);
        Storage.saveObjToJson('user-items',this.users);
        //console.log('Benutzer "${user.name}" wurde dem System hinzugefügt');
    }
    addProduct(product){
        this.products.push(product);
        console.log('Produkt "${product.name}" wurde dem System hinzugefügt');
    }
    deleteProduct(product){
        this.products = this.products.filter(p => p !== product);
        console.log('Produkt "${product.name}" wurde gelöscht');
    }
    getUsers(){
        return Storage.loadJsonToObj('user-items');
    }
    loadUsers() {
        this.users = Storage.loadJsonToObj('user-items');
    }
}

export default System;