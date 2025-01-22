class Storage {

    static saveObjToJson(myObj){
        const data = JSON.stringify(myObj);
        localStorage.setItem('user-items', data);
       // console.log(data);
    }
    static loadJsonToObj (){
        const data = localStorage.getItem('user-items');
        console.log(data);
        return JSON.parse(data);
    }
}

export default Storage;