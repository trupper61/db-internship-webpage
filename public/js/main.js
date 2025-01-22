//hel
import User from '../../server/class/user.js';
import Admin from '../../server/class/admin.js';
import System from '../../server/class/system.js';
import Storage from '../../server/storage.js';
// hel
const system = new System();


const usera = new User('Anna Müller', 'anna@example.com', 'securepassword', 50);
const userb = new User('Max Mustermann', 'mustermann@example.com', '123456', 321);
const userc = new User('Michael Witzel', 'witzel@example.com', '987654', 5213);

// Hello
system.addUser(usera);
system.addUser(userb);
system.addUser(userc);

console.log(Storage.loadJsonToObj());

console.log("Frontend-Setup geladen!");