const modalCreateCart = () => {

    alert(`Aqui se crearía el carrito y devolvería el id de carrito`);
    let cartId = 1
    let cart = {
        id: cartId,
        timestamp: Date.now(),
        productos:[],
    }
    return cart;

}

export default modalCreateCart;