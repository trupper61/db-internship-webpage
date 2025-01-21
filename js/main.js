import Admin from "./class/admin.js";
import System from "./class/system.js";

try{
    let ad = new Admin("hof", "@gmai", "suadhad", "321");
} catch(e){
    console.log(e)
}

console.log("Frontend-Setup geladen!");