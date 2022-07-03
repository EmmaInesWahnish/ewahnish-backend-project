let array = [];
const renderProducts = () => {
    fetch('http://localhost:8080/api/productos')
        .then(res => res.json())
        .then(data => {
            console.log(data.products);
            const cardContainer = document.getElementById('productCards')
            for (let product of data.products) {
                array.push(product)
                const cards = document.createElement('div');

                cards.setAttribute('class', 'flex-container-card')

                cards.innerHTML = `<div class="card-header center" width="300px" >
                                        <h3>${product.id} ${product.codigo}</h3>
                                        <h3>${product.nombre}</h3> 
                                        <h3>${product.descripcion}</h3>
                                        <h3>Precio: ${product.precio}</h3>
                                        <h3>Stock: ${product.stock}</h3>
                                        <div class"pictures">
                                            <img src='${product.foto}'
                                        <div>     
                                    </div>`

                cardContainer.appendChild(cards)
            }


        })
        .catch(err => console.log(err))
}

export default renderProducts;
