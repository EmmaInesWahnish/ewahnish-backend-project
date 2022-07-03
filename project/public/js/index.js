import renderProducts from './renderProducts.js';

const listProducts = document.getElementById('listProducts');

listProducts.addEventListener('click', () => {
    renderProducts();
});