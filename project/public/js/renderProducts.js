import renderModalModifyProduct from './renderModalModifyProduct.js';
import renderModalDeleteProduct from './renderModalDeleteProduct.js';
import renderModalAddToCart from './renderModalAddToCart.js';
import renderModalDeleteFromCart from './renderModalDeleteFromCart.js';

let array = [];

//element.parentNode.removeChild(element);
const renderProducts = () => {
    let quantity = 0;
    let cartId = 0;
    document.getElementById('newProduct').innerHTML = "";
    fetch('http://localhost:8080/api/productos')
        .then(res => res.json())
        .then(data => {
            console.log(data.bool);

            document.getElementById('productCards').innerHTML = "";

            const cardContainer = document.getElementById('productCards')

            for (let product of data.products) {
                array.push(product)
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

                        renderModalDeleteProduct(product, quantity);

                    })

                } else {
                    buttons.innerHTML = `<div class="flex-container-buttons  p-0 m-0" style="width:250px">
                                            <button id=A${product.id}
                                                    class="btn btn-xs btn-light">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>
                                            </button>
                                            <div id=Q${product.id} class="flex-item"><span> ${quantity} </span></div>
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

                        if (cartId = 0){
                            cartId = modalCreateCart();
                        }

                        renderModalAddToCart(product,quantity,cartId);

                    })

                    let dButtonId = `D${product.id}`

                    let deleteProductFromCart = document.getElementById(dButtonId);

                    deleteProductFromCart.addEventListener('click', function () {

                        if (cartId = 0){
                            alert(`Aun no se ha habilitado ningun carrito`);
                            return;
                        }

                        renderModalDeleteFromCart(product,quantity,cartId);

                    })

                }

            }
        })
        .catch(err => console.log(err))
}

export default renderProducts;
