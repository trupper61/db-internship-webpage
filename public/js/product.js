import System from "../../server/class/system.js";
import Product from "../../server/class/product.js";

const container = document.getElementById('container');
const uploadForm = document.getElementById('product-upload-form')
const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const productDescriptionInput = document.getElementById('product-description');

const overlay = document.getElementById('product-detail-overlay');
const closeDetailButton = document.getElementById('close-detail');
const buyProductBtn = document.getElementById('buy-product');

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
        div.addEventListener('click', function() {
            showProductDetails(product);
        });
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

closeDetailButton.addEventListener('click', function() {
    overlay.style.display = 'none';
});

buyProductBtn.addEventListener('click', function() {
    if (!sys.activeUser) {
        alert("Log dich ein, um ein Produkt zu kaufen.");
        return;
    }
    const productId = overlay.getAttribute('data-product-id');
    const product = sys.products.find(p => p.id == productId);

    try {
        overlay.style.display = 'none';
    } catch (error) {
        alert(error.message);
    }
});

function showProductDetails(product) {
    console.log(product);
    document.getElementById('detail-product-name').textContent = product.name;
    document.getElementById('detail-product-price').textContent = `Preis: ${product.price}€`;
    document.getElementById('detail-product-owner').textContent = `Besitzer: ${product.owner}`;
    document.getElementById('detail-product-description').textContent = product.description;

    overlay.setAttribute('data-product-id', product.id);
    overlay.style.display = 'flex';
}

displayProducts();