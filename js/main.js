import Admin from "./class/admin.js";
import System from "./class/system.js";
import User from "./class/user.js";

let sys = new System();
sys.addUser(new User("rup", "arau@gmail.com", "123456", "0")); // Testing


export { sys };

console.log("Frontend-Setup geladen!");