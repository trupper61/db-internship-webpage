import Storage from "../storage.js";
import User from "./user.js";

class Product {
    constructor(name, price, email, description = "", id = null){
        this.id = id;
        this.name = name;
        this.price = price;
        this.owner = email;
        this.description = description;
    }
}

export default Product;
