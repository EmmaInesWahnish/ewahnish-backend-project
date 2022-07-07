import renderProducts from './renderProducts.js';

import renderNewProductForm from './renderNewProductForm.js';

import renderModalOneProduct from './renderModalOneProduct.js';

const listProducts = document.getElementById('listProducts');

const createProduct = document.getElementById('createProduct');

const productDetail = document.getElementById('productDetail');

listProducts.addEventListener('click', () => {
    renderProducts();
});

createProduct.addEventListener('click', () => {
    renderNewProductForm();
});

productDetail.addEventListener('click', () => {
    renderModalOneProduct()
}) 