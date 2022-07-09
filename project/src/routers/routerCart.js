import express from 'express';
import AnyContainer from "../api/Container.js";

const routerCart = express.Router();
const Cart = new AnyContainer('./files/carrito.txt');
// *** ROUTES ***
//This route returns all carts
routerCart.get('/', async (req, res) => {
    try {
        const array = await Cart.getAll();
        res.json({ message: 'Carritos ', carrito: array });
    }
    catch (error) {
        res.json({
            message: 'No se ha podido recuperar la lista de carritos',
            error: error
        })
    }
})

//This route returns a cart according to its id.
routerCart.get('/:id', async (req, res) => {
    let id = parseInt(req.params.id);
    if (!isNaN(id)) {
        try {
            const carrito = await Cart.getById(id);
            if (carrito != undefined) {
                res.json({
                    message: 'carrito encontrado',
                    id: carrito.id,
                    timestamp: carrito.timestamp,
                    productos: carrito.productos
                })
            } else {
                res.json({
                    message: "carrito no encontrado"
                })
            }
        }
        catch (error) {
            res.json({
                message: "Se produjo un error al buscar el carrito",
                error: error
            })
        }
    } else {
        res.json({
            "error": "El id solicitado no es numerico"
        })
    }
})

//This route ads an empty cart
routerCart.post('/', async (req, res) => {
    let receive = req.body;
    let carrito = [{
        timestamp: receive.timestamp,
        productos: receive.productos,
    }]
    if (carrito) {
        try {
            await Cart.saveArray(carrito);
            try {
                const carrito = await Cart.getAll();
                const cartId = carrito[carrito.length - 1].id;
                res.json({
                    message: "Carrito incorporado",
                    carrito: carrito,
                    cartId: cartId
                })
            }
            catch (error) {
                res.json({
                    message: 'No se ha podido obtener la lista de productos',
                    error: error
                })
            }
        }
        catch (error) {
            res.json({
                message: 'No se ha podido guardar el producto',
                error: error
            })
        }
    } else {
        res.json({
            message: "Los datos suministrados son incorrectos"
        })
    }

})

//This route updates the cart with the selected id
//A product is added to the cart with id :id
routerCart.post('/:id/productos', async (req, res) => {
    const id = parseInt(req.params.id);
    let indexc = 0
    let indexp = 0
    let receive = req.body;
    let searchedCart = [];
    let carts = [];
    let modifiedCart = [];
    try {
        carts = await Cart.getAll();
        indexc = carts.findIndex(element => element.id === id);
        if (indexc !== -1) {
            searchedCart = carts[indexc];
            let cartId = searchedCart.id;
            let cartTimestamp = searchedCart.timestamp;
            const productArray = searchedCart.productos;
            console.log("Productos .1 ", productArray)
            indexp = productArray.findIndex(element => element.id === receive.id);
            if (indexp !== -1) {
                carts[indexc].productos[indexp].cantidad = carts[indexc].productos[indexp].cantidad + receive.cantidad;
                modifiedProduct = carts[indexc];
            }
            else {
                productArray.push(receive);
                modifiedCart = {
                    id: cartId,
                    timestamp: cartTimestamp,
                    productos: productArray
                }
            }
            try {
                console.log("llegue aca y mando ", modifiedCart)
                await Cart.modifyById(cartId, modifiedCart);
                res.json({
                    message: 'Modificacion exitosa',
                    product: modifiedCart
                })
            }
            catch (error) {
                res.json({
                    message: 'No fue posible cargar los productos en productos.txt',
                    error: error
                })
            }
        }
        else {
            res.json({
                message: 'Carrito no encontrado',
            })
        }
    }
    catch (error) {
        res.json({
            message: 'Ha ocurrido un error al intentar recuperar la lista de carritos',
            error: error
        })
    }
})

routerCart.delete('/:id/productos/:id_prod', async (req, res) => {
    const id = parseInt(req.params.id);
    const id_prod = parseInt(req.params.id_prod)
    let receive = req.body;
    let searchedProduct = {};
    console.log("The id ", id, "receive  ", receive)
    try {
        const Cart = await Cart.getAll();
        const indexc = Cart.findIndex(element => element.id === id);
        searchedCart = Cart[indexc];
        console.log(indexc, "  ", searchedProduct);
        if (indexc !== -1) {
            console.log("No es index -1")
            const theLength = searchedCart.productos.length
            if (theLength > 0) {
                const indexp = searchedCart.productos.findindex(element => element.id === receive.id);
                Cart[indexc].productos[indexp].cantidad = Cart[indexc].productos[indexp].cantidad + receive.cantidad;
            } else {
                console.log("Estoy en nuevo")
                newProduct.id = receive.producto.id;
                newProduct.timestamp = receive.producto.timestamp;
                newProduct.nombre = receive.nombre;
                newProduct.descripcion = receive.descripcion;
                newProduct.codigo = receive.codigo;
                newProduct.foto = receive.foto;
                newProduct.precio = receive.precio;
                newProduct.stock = receive.stock;
                newProduct.cantidad = receive.cantidad;
            }

            Cart.productos.push(newProduct);

            //The array gets updated here
            let array = [];

            Cart.forEach((element) => {
                array.push({
                    timestamp: element.timestamp,
                    productos: element.productos,
                })
            })

            //carrito.txt file is replaced with the updated array
            try {
                await fs.promises.unlink('./src/files/carrito.txt');
                try {
                    await Cart.save(array);
                    res.json({
                        message: 'Modificacion exitosa',
                        product: array
                    })
                }
                catch (error) {
                    res.json({
                        message: 'No fue posible cargar los carritos en Cart.txt',
                        error: error
                    })
                }
            }
            catch (error) {
                res.json({
                    message: 'No se pudo borrar el archivo carrito.txt',
                    error: error
                })
            }
        } else {
            res.json({
                message: 'carrito no encontrado'
            })
        }
    }
    catch (error) {
        res.json({
            message: 'Ha ocurrido un error al intentar recuperar la lista de carritos',
            error: error
        })
    }

})

//This route removes the cart with the selected id
routerCart.delete('/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    if (!isNaN(id)) {
        try {
            const removedCart = await Cart.deleteById(id);
            let howManyProducts = Cart.productos.length;

            if (removedCart.length === 0) {
                res.json({
                    message: "El carrito solicitado no existe"
                })
            } else {
                res.json({
                    message: "El carrito ha sido eliminado",
                    product: removedCart
                })
            }
        }
        catch (error) {
            res.json({
                message: "El carrito no pudo ser eliminado",
                error: error
            })
        }
    } else {
        res.json({
            message: "El id suministrado no es numerico"
        })
    }
})

export default routerCart;