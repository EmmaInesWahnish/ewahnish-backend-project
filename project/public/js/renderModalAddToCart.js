const renderModalAddToCart = (product, quantity, cart) => {
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

    alert(`Aqui se agregaría el producto ${cartProduct.id} al carrito con id ${cart.id}`);

}

export default renderModalAddToCart;