const renderModalAddToCart = (product, quantity, cartId, cartTimestamp) => {
    let cartRequest = {
        cartId: cartId,
        cartTimestamp: cartTimestamp,
        addProduct: {
            id: product.id,
            timestamp: product.timestamp,
            nombre: product.nombre,
            descripcion: product.descripcion,
            codigo: product.codigo,
            foto: product.foto,
            precio: product.precio,
            stock: product.stock,
            cantidad: quantity
        }
    }


}

export default renderModalAddToCart;