const modifyOneProduct = (modifiedProduct) => {

    const productRoute = `http://localhost:8080/api/productos/${modifiedProduct.id}`

    console.log(productRoute);

    const requestOptions = {
        method:'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(modifiedProduct),
    };

    fetch(productRoute, requestOptions)
    .then(async res => {
        const data = await res.json();
        console.log(data);
        alert('Modificación exitosa');
    })
    .catch(error => {
        console.log('Se produjo el siguiente error: ', error);
    })
    
}

export default modifyOneProduct;
