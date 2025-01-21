import User from "./user.js";

class Admin extends User {
    constructor(name, email, password, balance = 0){
        super(name, email, password, balance);
        this.isAdmin = true;
    }

    deleteUser(system, user) {
        system.users = system.users.filter(u => u !== user);
        console.log('Benutzer ${user.name} wurde gelöscht.');
    }
}

export default Admin;