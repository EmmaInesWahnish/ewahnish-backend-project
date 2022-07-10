//element.parentNode.removeChild(element);
const renderCarts = () => {
    let quantity = []
    let i = 0
    let cartId = 0;
    let cart = [];

    document.getElementById('activeCart').innerHTML = "";
    document.getElementById('cartNumber').innerHTML = "";
    document.getElementById('productCards').innerHTML = "";
    document.getElementById('newProduct').innerHTML = "";
    document.getElementById('oneProduct').innerHTML = "";
    document.getElementById('myCart').innerText = "";
    document.getElementById('productsInCart').innerHTML = "";
    document.getElementById('homePage').innerHtml = "";
    

    const thisCart = document.getElementById('thisCart');

    let cartNumber = Number(thisCart.innerText);

    //Para probar listado
    cartNumber = 2;

    const productRoute = `http://localhost:8080/api/carrito/${cartNumber}`

    fetch(productRoute)
        .then(res => res.json())
        .then(data => {

            const myCart = document.getElementById('myCart')

            myCart.innerText = `Contenido del Carrito ${cartNumber}`;

            const cartContainer = document.getElementById('productsInCart')

            const tableHead = document.createElement('tr');

            tableHead.innerHTML = `<th>
                                            <p> 
                                                Id 
                                            </p>
                                        </th>   
                                        <th>
                                            <p> 
                                                Nombre
                                            </p>
                                        </th>
                                        <th>
                                            <p> 
                                                Descripcion
                                            </p>
                                        </th>
                                        <th>
                                            <p> 
                                                Codigo
                                            </p>
                                        </th>    
                                        <th>
                                            <p> 
                                                Foto
                                            </p>
                                        </th>    
                                        <th>
                                            <p> 
                                                Precio
                                            </p>
                                        </th>    
                                        <th>
                                            <p> 
                                                Pedido
                                            </p>
                                        </th>`

            cartContainer.appendChild(tableHead)

            for (let product of data.productos) {
                const tableBody = document.createElement('tr')
                tableBody.innerHTML = `<td>
                                            <p> 
                                                ${product.id} 
                                            </p>
                                        </td>
                                        <td>
                                            <p> 
                                                ${product.nombre}
                                            </p>
                                        </td>
                                        <td>
                                            <p> 
                                                ${product.descripcion}
                                            </p>
                                        </td>
                                        <td>
                                            <p> 
                                                ${product.codigo}
                                            </p>
                                        </td>    
                                        <td>
                                            <img src='${product.foto}'>
                                        </td>    
                                        <td>
                                            <p> 
                                                ${product.precio}
                                            </p>
                                        </td>    
                                        <td>
                                            <p> 
                                                ${product.cantidad}
                                            </p>
                                        </th>`

                cartContainer.appendChild(tableBody)

            }
        })
        .catch(err => console.log(err))
}

export default renderCarts;
