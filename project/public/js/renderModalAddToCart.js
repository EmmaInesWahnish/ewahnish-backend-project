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
    console.log(cartId)
    const productRoute = `http://localhost:8080/api/carrito/${cartId}/productos`

    console.log(productRoute);

    console.log("Agrego producto ", cartProduct)

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartProduct),
    };

    fetch(productRoute, requestOptions)
        .then(async res => {
            await res.json();
        })
        .catch(error => {
            console.log('Se produjo el siguiente error: ', error);
        })


}

export default renderModalAddToCart;