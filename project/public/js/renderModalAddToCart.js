const renderModalAddToCart = (product, quantity, cartId) => {
    let cartProduct = {
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

    console.log(`Aqui se agregaría ${cartProduct} al carrito con id ${cartId}`);

}

export default renderModalAddToCart;