//hel
const User = require('../../server/class/user.js');
const Admin = require('../../server/class/admin.js');
const System = require('../../server/class/system.js');
// hel
const system = new System();

const newUser = new User('Anna Müller', 'anna@example.com', 'securepassword', 50);
// Hello
system.addUser(newUser);

console.log("Frontend-Setup geladen!");