import Storage from "../storage.js";
import User from "./user.js";

class Product {
    constructor(name, price, ownerName, description = ""){
        this.id = Storage.getNextId('product-id');
        this.name = name;
        this.price = price;
        this.owner = ownerName;
        this.description = description;
    }
    assignOwner(owner) {
        this.owner = owner.name;
    }
}

export default Product;
