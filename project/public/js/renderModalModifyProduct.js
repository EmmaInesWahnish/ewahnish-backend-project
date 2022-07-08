import modifyOneProduct from './modifyOneProduct.js'
const renderModalModifyProduct = (product) => {
  //console.log(product)
  let buttonId = "SM" + product.id;

  document.getElementById('modal').style.display = 'block';

  const modifyForm = document.getElementById('modifyForm');

  modifyForm.innerHTML = `<div class="form-group">
        <span for="productId"><b>Id de Producto ${product.id}</b></span>
      </div>

      <div class="form-group">
        <label for="nombre"><b>Nombre</b></label>
        <input id="nomb" class="form-control" type="text" name="nombre" >
      </div>

      <div class="form-group">
        <label for="descripcion"><b>Descripcion</b></label>
        <input id="desc" class="form-control" type="text" name="descripcion" value=${product.descripcion}>
      </div>

      <div class="form-group">
        <label for="codigo"><b>Codigo</b></label>
        <input id="code" class="form-control" type="text" name="codigo" value=${product.codigo}>
      </div>

      <div class="form-group">
        <label for="foto"><b>Foto (url)</b></label>
        <input id="photo" class="form-control" type="text" name="photo">
      </div>

      <div class="form-group">
        <label for="precio"><b>Precio</b></label>
        <input id="price" class="form-control" type="number" name="precio" >
      </div>

      <div class="form-group">
        <label for="stock"><b>Stock</b></label>
        <input id="quantity" class="form-control" type="text" name="stock" >
      </div>

      <button type="submit" id=${buttonId} class="btn btn-success">Enviar</button>`;

  document.getElementById("nomb").value = product.nombre;
  document.getElementById("desc").value = product.descripcion;
  document.getElementById("code").value = product.codigo;
  document.getElementById("photo").value = product.foto;
  document.getElementById("price").value = product.precio;
  document.getElementById("quantity").value = product.stock;

  nomb.addEventListener('change', function () {
    product.nombre = document.getElementById("nomb");
  })
  desc.addEventListener('change', function () {
    product.descripcion = document.getElementById("desc").value;
  })
  code.addEventListener('change', function () {
    product.codigo = document.getElementById("code").value;
  })
  photo.addEventListener('change', function () {
    product.foto = document.getElementById("photo").value;
  })
  price.addEventListener('change', function () {
    product.precio = document.getElementById("price").value;
  })
  quantity.addEventListener('change', function () {
    product.stock = document.getElementById("quantity").value;
  })

  let formUpdate = document.getElementById(buttonId);

  formUpdate.addEventListener('click', function () {
    let modifiedProduct = {
      id: product.id,
      timestamp: product.timestamp,
      nombre: product.nombre,
      descripcion: product.descripcion,
      codigo: product.codigo,
      foto: product.foto,
      precio: product.precio,
      stock: product.stock,
    }

    modifyOneProduct(modifiedProduct);

    document.getElementById('modal').style.display = 'none';
  })

  let closeModal = document.getElementById('close');

  closeModal.addEventListener('click', function () {
    document.getElementById('modal').style.display = 'none';
  })

}

export default renderModalModifyProduct;