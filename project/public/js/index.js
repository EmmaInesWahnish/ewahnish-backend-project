import renderProducts from './renderProducts.js';

import renderCarts from './renderCarts.js';

import renderNewProductForm from './renderNewProductForm.js';

import renderModalOneProduct from './renderModalOneProduct.js';

import renderModalDeleteCart from './renderModalDeleteCart.js'

const listProducts = document.getElementById('listProducts');

const createProduct = document.getElementById('createProduct');

const productDetail = document.getElementById('productDetail');

const deleteCart = document.getElementById('deleteCart');

const listCart =document.getElementById('listCart');

listProducts.addEventListener('click', () => {
    renderProducts();
});

createProduct.addEventListener('click', () => {
    renderNewProductForm();
});

productDetail.addEventListener('click', () => {
    renderModalOneProduct()
}) 

deleteCart.addEventListener('click', () => {
    renderModalDeleteCart()
}) 

listCart.addEventListener('click', () => {
    renderCarts()
}) 