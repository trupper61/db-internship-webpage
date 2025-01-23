import Product from "../../server/class/product.js";

const container = document.getElementById('container');

let array = [];

array[0] = new Product('Laptop', 999, null, 'Very handy gadget');
array[1] = new Product('Stuhl', 3299, null, 'Ein veehrtes Heilligtum');
array[2] = new Product('Tisch', 421, null, 'Am praktischsten mit vier Beinen');
array[3] = new Product('Fernseher', 9320, null, 'Crazy 16k Bildschirm, benötigt neueste Grafikkarte');

for (var i = 0; i < array.length; i++){
    let div = document.createElement('div');
    div.className = 'item';
    div.innerHTML += `<h2>${array[i].name}</h2>`;
    div.innerHTML += `<p class="price">Preis: ${array[i].price}€</p>`;
    div.innerHTML += `<p>Besitzer: ${array[i].owner ? array[i].owner.name : 'Kein Besitzer'}</p>`;
    div.innerHTML += `<p class="description">${array[i].description}`;
    container.appendChild(div);
}