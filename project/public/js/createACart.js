import renderModalAddToCart from './renderModalAddToCart.js'
const createACart = (cart,quantity, product) => {

    let cartId 

    const productRoute = `http://localhost:8080/api/carrito/`

    const requestOptions = {
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cart),
    };

    fetch(productRoute, requestOptions)
    .then(async res => {
        const data = await res.json();
        console.log(data);
        cartId = data.cartId;
        document.getElementById('activeCart').innerHTML = "";
        document.getElementById('activeCart').innerHTML = `Carrito Activo = `;
        document.getElementById('cartNumber').innerHTML = "";
        document.getElementById('cartNumber').innerHTML = `${cartId}`;
        renderModalAddToCart(product, quantity, cartId);
        return cartId;
    })
    .catch(error => {
        console.log('Se produjo el siguiente error: ', error);    
    })
    
}

export default createACart;
