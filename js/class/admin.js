import User from "./user.js";

class Admin extends User{
    constructor(name, email, password, balance){
        super(name, email, password, balance);
        this.isAdmin = true;
    }
}

export default Admin;