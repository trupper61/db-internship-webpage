class User{
    constructor(name, email, password, balance = 0){  
        this.id = User.generateId();
        this.name = name;
        this.email = email;
        this.password = password;
        this.balance = balance;
        this.products = [];
    }
    BuyProduct(product){
        if (this.balance < product.price) {
            throw new Error("Benutzer verfügt nicht über die benötigte Liquidität!");
        }

        if (product.owner === this) {
            throw new Error("Du kannst dein eigenes Produkt nicht kaufen");
        }
        this.balance -= product.price;
        product.owner.balance += product.price;
        product.owner.removeProduct(product);
        this.addProduct(product);
        console.log('Produkt "${product.name}" wurde erflogreich gekauft.');
    }
    removeProduct(product){
        this.products = this.products.filter(p => p !== product);
        product.owner = null;
    }
    addProduct(product){
        this.products.push(product);
        product.owner = this;
    }
    static generateId() {
        let currentId  = parseInt(localStorage.getItem('user-id-counter') || '0', 10);
        localStorage.setItem('user-id-counter', currentId + 1);
        return currentId;
    }
}

export default User;