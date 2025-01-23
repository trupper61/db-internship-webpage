import System from "../../server/class/system.js";
import Product from "../../server/class/product.js";

const container = document.getElementById('container');
const uploadForm = document.getElementById('product-upload-form')
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const productDescriptionInput = document.getElementById('product-description');

const sys = new System();


function displayProducts() {
    container.innerHTML = '';
    for (const product of sys.products){
        let div = document.createElement('div');
        div.className = 'item';
        div.innerHTML += `<h2>${product.name}</h2>`;
        div.innerHTML += `<p class="price">Preis: ${product.price}€</p>`;
        div.innerHTML += `<p>Besitzer: ${product.owner}</p>`;
        div.innerHTML += `<p class="description">${product.description}`;
        container.appendChild(div);
    }
}

uploadForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = productNameInput.value;
    const price = parseFloat(productPriceInput.value);
    const description = productDescriptionInput.value;

    if(!sys.activeUser) {
        alert("Du musst eingeloggt sein, um ein Produkt hochzuladen.")
        return;
    }
    const username = localStorage.getItem('loggedInUser')
    sys.addProduct(new Product(name, price, username, description));
    displayProducts();
    productNameInput.value = '';
    productPriceInput.value = '';
    productDescriptionInput.value = '';
});

displayProducts();