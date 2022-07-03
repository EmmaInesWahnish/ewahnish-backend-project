import renderProducts from './renderProducts.js';

import renderNewProductForm from './renderNewProductForm.js';

const listProducts = document.getElementById('listProducts');

const createProduct = document.getElementById('createProduct')

listProducts.addEventListener('click', () => {
    renderProducts();
});

createProduct.addEventListener('click', () => {
    renderNewProductForm();
});