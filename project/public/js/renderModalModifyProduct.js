const renderModalModifyProduct = (product) => {
    //console.log(product)
    let buttonId = "SM" + product.id;

    document.getElementById('modalForm').style.display = 'block';

    const theForm = document.getElementById('theForm');

    theForm.innerHTML = `<div class="form-group">
        <span for="productId"><b>Id de Producto ${product.id}</b></span>
      </div>

      <div class="form-group">
        <label for="nombre"><b>Nombre</b></label>
        <input id="nombre" class="form-control" type="text" name="nombre" value=${product.nombre}>
      </div>

      <div class="form-group">
        <label for="descripcion"><b>Descripcion</b></label>
        <input id="descripcion" class="form-control" type="text" name="descripcion" value=${product.descripcion}>
      </div>

      <div class="form-group">
        <label for="codigo"><b>Codigo</b></label>
        <input id="codigo" class="form-control" type="text" name="codigo" value=${product.codigo}>
      </div>

      <div class="form-group">
        <label for="foto"><b>Foto (url)</b></label>
        <input id="foto" class="form-control" type="text" name="foto" value=${product.foto}>
      </div>

      <div class="form-group">
        <label for="precio"><b>Precio</b></label>
        <input id="precio" class="form-control" type="number" name="precio" value=${product.precio}>
      </div>

      <div class="form-group">
        <label for="stock"><b>Stock</b></label>
        <input id="stock" class="form-control" type="text" name="stock" value=${product.stock}>
      </div>

      <button type="submit" id=${buttonId} class="btn btn-success">Enviar</button>`;

    let formUpdate = document.getElementById(buttonId);

    formUpdate.addEventListener('click', function () {
        console.log(`El Id de producto es  ${buttonId}`)
        document.getElementById('modalForm').style.display = 'none';
    })

    let closeModal = document.getElementById('close_generic');

    closeModal.addEventListener('click', function () {
        document.getElementById('modalForm').style.display = 'none';
    })

}

export default renderModalModifyProduct;