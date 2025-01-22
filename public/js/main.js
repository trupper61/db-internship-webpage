import User from '../../server/class/user.js';
import Admin from '../../server/class/admin.js';
import System from '../../server/class/system.js';
import Storage from '../../server/storage.js';

//window.localStorage.clear();

let sys = new System;
console.log(initialize());
if (!initialize()) {
    sys.addUser(new User('Admin', 'local@host.com', '987654', 0));
    console.log("He");
}

console.log(Storage.loadJsonToObj());

function initialize() {
    let flag = false;
    for (const user of sys.users){
        if (user.id == 0 && user.name === 'Admin'){
            flag = true;
        }
    }
    return flag;
}