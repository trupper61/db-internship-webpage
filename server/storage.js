import User from "./class/user.js";
import Product from "./class/product.js";

class Storage {
    static saveObjToJson(key, Obj){
        const data = JSON.stringify(Obj);
        localStorage.setItem(key, data);
    }
    static loadJsonToObj(key){
        const data = localStorage.getItem(key);
        if (typeof data !== 'undefined' && data !== null){
            console.log(data);
            return JSON.parse(data);
        }
        else {
            return [];
        }
    }
    static getNextId(key) {
        const currentId = parseInt(localStorage.getItem(key) || '0', 10);
        localStorage.setItem(key, (currentId + 1).toString());
        return currentId;
    }
    static resetIds(key) {
        localStorage.setItem(key, '0');
    }
    static resetStorage() {
        localStorage.clear();
    }
}

export default Storage;