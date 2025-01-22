class Product {
    constructor(name, price, owner, description = ""){
        this.name = name;
        this.price = price;
        this.owner = owner;
        this.description = description;
        if (owner) {
            owner.addProduct(this);
        }
    }
}

export default Storage;