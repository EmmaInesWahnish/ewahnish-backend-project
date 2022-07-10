const renderHome = () => {

    document.getElementById('activeCart').innerHTML = "";
    document.getElementById('cartNumber').innerHTML = "";
    document.getElementById('productCards').innerHTML = "";
    document.getElementById('newProduct').innerHTML = "";
    document.getElementById('oneProduct').innerHTML = "";
    document.getElementById('myCart').innerText = "";
    document.getElementById('productsInCart').innerHTML = "";
    document.getElementById('homePage').innerHtml = "";


    const homePage = document.getElementById('homePage');

    //homePage.innerHTML = `<img src='../images/herramientas.svg'>`
}

export default renderHome;