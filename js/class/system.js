class System{
    constructor(){
        this.users = [];
        this.products = [];
        this.activeUser = null;
    }
    deleteUser(user){
        this.users.pop(user);
        console.log(user, "has been deleted from the System.");
    }
    addUser(user){
        this.users.push(user);
        console.log(user, "has been added to the System.");
    }
    addProduct(product){
        this.products.push(product);
        console.log(product, "has been added.");
    }
    deleteProduct(product){
        this.products.pop(product);
        console.log(product, "has been deleted.")
    }
}

export default System;