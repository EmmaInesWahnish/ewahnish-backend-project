import renderModalModifyProduct from './renderModalModifyProduct.js';
import renderModalDeleteProduct from './renderModalDeleteProduct.js';
import renderModalAddToCart from './renderModalAddToCart.js';
import renderModalDeleteFromCart from './renderModalDeleteFromCart.js';
import modalCreateCart from './modalCreateCart.js'
import addToQuantity from './addToQuantity.js';
import subtractFromQuantity from './subtractFromQuantity.js'

let array = [];

//element.parentNode.removeChild(element);
const renderProducts = (productId) => {
    let quantity = [];
    quantity[productId] = 0
    let i = 0
    let cartId = 0;
    let cart = [];
    console.log(productId)
    document.getElementById('enableButton').innerHTML = "";
    document.getElementById('productCards').innerHTML = "";
    document.getElementById('newProduct').innerHTML = "";
    document.getElementById('oneProduct').innerHTML = "";

    const productRoute = `http://localhost:8080/api/productos/${productId}`

    console.log(productRoute);

    fetch(productRoute)
        .then(res => res.json())
        .then(data => {
            let product = data.product
            const cardContainer = document.getElementById('oneProduct')

                const cards = document.createElement('div');

                cards.setAttribute('class', 'flex-container-card')

                cards.innerHTML = `<div>
                                    <div id=${product.id} class="card-header center" width="300px" >
                                        <h3>${product.id} ${product.codigo}</h3>
                                        <h3><i>${product.nombre}</i></h3> 
                                        <h3>${product.descripcion}</h3>
                                        <h3>Precio: ${product.precio}</h3>
                                        <h3>Stock: ${product.stock}</h3>
                                        <div class"pictures">
                                            <img src='${product.foto}'
                                        <div>     
                                    </div>
                                    <div id=${product.id}></div>`

                cardContainer.appendChild(cards);

                let theId = `${product.id}`;

                const cardButtons = document.getElementById(theId);

                const buttons = document.createElement('div');

                if (data.bool) {
                    buttons.innerHTML = `<button style="width:250px"
                                                id=U${product.id} 
                                                class="btn btn-primary">
                                                    Modificacion de Producto
                                        </button>                    
                                        <button style="width:250px" 
                                                id=D${product.id}
                                                class="btn btn-danger">
                                                    Eliminacion de Producto
                                        </button>`;

                    cardButtons.appendChild(buttons)

                    let productId = `U${product.id}`

                    let formModifyProduct = document.getElementById(productId);

                    formModifyProduct.addEventListener('click', function () {

                        renderModalModifyProduct(product);

                    })

                    let dproductId = `D${product.id}`

                    let formDeleteProduct = document.getElementById(dproductId);

                    formDeleteProduct.addEventListener('click', function () {

                        renderModalDeleteProduct(product, quantity[productId]);

                    })

                } else {
                    buttons.innerHTML = `<div class="flex-container-buttons  p-0 m-0" style="width:250px">
                                            <button id=A${product.id}
                                                    class="btn btn-xs btn-light">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>
                                            </button>
                                            <div id=Q${product.id} class="flex-item"><span> ${quantity[product.id]} </span></div>
                                            <button id=S${product.id}
                                                    class="btn btn-xs btn-light">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-dash-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"/>
</svg>
                                            </button>
                                        </div>                                
                                        <button 
                                                id=M${product.id} 
                                                class="btn btn-success" style="width:250px">
                                                    Agregar al carrito
                                        </button>
                                        <button 
                                                id=C${product.id} 
                                                class="btn btn-danger" style="width:250px">
                                                    Eliminar del carrito
                                        </button>`;


                    cardButtons.appendChild(buttons)

                    let mButtonId = `M${product.id}`

                    let addProductToCart = document.getElementById(mButtonId);

                    addProductToCart.addEventListener('click', function () {

                        if (cartId === 0) {
                            cart = modalCreateCart();
                        }

                        renderModalAddToCart(product, quantity[product.id], cart);

                    })

                    let dButtonId = `C${product.id}`

                    let productId = `${product.id}`

                    let deleteProductFromCart = document.getElementById(dButtonId);

                    deleteProductFromCart.addEventListener('click', function () {

                        if (cartId === 0) {
                            alert(`Aun no se ha habilitado ningun carrito`);
                        } else {
                            renderModalDeleteFromCart(productId, cartId);
                        }
                    })

                    let aButtonId = `A${product.id}`

                    let add = document.getElementById(aButtonId);

                    add.addEventListener('click', function () {

                        quantity[product.id] = addToQuantity(quantity[product.id], product);
                    })

                    let sButtonId = `S${product.id}`

                    let subtract = document.getElementById(sButtonId);

                    subtract.addEventListener('click', function () {

                        quantity[product.id] = subtractFromQuantity(quantity[product.id], product);

                    })

                }
        })
        .catch(err => console.log(err))
}

export default renderProducts;