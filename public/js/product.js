import System from "../../server/class/system.js";

const container = document.getElementById('container');

const sys = new System();

for (const product of sys.products){
    let div = document.createElement('div');
    div.className = 'item';
    div.innerHTML += `<h2>${product.name}</h2>`;
    div.innerHTML += `<p class="price">Preis: ${product.price}€</p>`;
    div.innerHTML += `<p>Besitzer: ${product.owner ? product.owner.name : 'Kein Besitzer'}</p>`;
    div.innerHTML += `<p class="description">${product.description}`;
    container.appendChild(div);
}