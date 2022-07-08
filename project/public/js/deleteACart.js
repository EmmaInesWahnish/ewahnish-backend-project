const deleteCart = (cartId) => {
    console.log(productId)
    const productRoute = `http://localhost:8080/api/carrito/${cartId}`

    console.log(productRoute);

    fetch(productRoute, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(async res => {
            
            const data = await res.json();
            console.log(data);
        
        })
        .catch(err => console.log(err))
}

export default deleteCart;
