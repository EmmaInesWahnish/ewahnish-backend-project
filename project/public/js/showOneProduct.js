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

        })
        .catch(err => console.log(err))
}

export default renderProducts;