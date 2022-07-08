const renderNewProductForm = () => {
    document.getElementById('enableButton').innerHTML="";
    document.getElementById('productCards').innerHTML="";
    document.getElementById('newProduct').innerHTML="";
    document.getElementById('oneProduct').innerHTML="";

    const newProduct = document.getElementById('newProduct');
    const productForm = document.createElement('div');
    productForm.setAttribute('class', 'jumbotron');
    productForm.innerHTML = `<h2>Alta de producto</h2>
    <br>
    <form id="productForm" action="/api/productos" method="POST">

      <div class="form-group">
        <label for="nombre"><b>Nombre</b></label>
        <input id="nombre" class="form-control" type="text" name="nombre">
      </div>

      <div class="form-group">
        <label for="descripcion"><b>Descripcion</b></label>
        <input id="descripcion" class="form-control" type="text" name="descripcion">
      </div>

      <div class="form-group">
        <label for="codigo"><b>Codigo</b></label>
        <input id="codigo" class="form-control" type="text" name="codigo">
      </div>

      <div class="form-group">
        <label for="foto"><b>Foto (url)</b></label>
        <input id="foto" class="form-control" type="text" name="foto">
      </div>

      <div class="form-group">
        <label for="precio"><b>Precio</b></label>
        <input id="precio" class="form-control" type="number" name="precio">
      </div>

      <div class="form-group">
        <label for="stock"><b>Stock</b></label>
        <input id="stock" class="form-control" type="text" name="stock">
      </div>

      <button type="submit" class="btn btn-success">Enviar</button>
    </form>`

    newProduct.appendChild(productForm);
}

export default renderNewProductForm;