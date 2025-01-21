class User{
    static idCounter = 0;
    constructor(name, email, password, balance){  
        this.id = this.idCounter;
        this.idCounter++;
        
        this.name = name;
        this.email = email;
        this.password = password;
        this.balance = balance;
        this.products = [];
    }
    BuyProduct(product){
        if(this.balance <= product.price){
            this.balance -= product.price;
            product.owner.balance += product.price;
            product.owner.RemoveProduct(product)
            this.AddProduct(product);       
        }
        else {
            throw console.error("Benutzer verfügt nicht die benötigte Liquidität!");
        }     
    }
    RemoveProduct(product){
        this.products.pop(product);
        product.owner = null;
    }
    AddProduct(product){
        this.products.push(product);
        product.owner = this;
    }
}

export default User;