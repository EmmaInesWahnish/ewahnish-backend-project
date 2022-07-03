import express from 'express';
const routerCart = express.Router();

// *** ROUTES ***
//This route returns the Cart list
routerCart.get('/:id/productos', async (req, res) => {
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

//This route returns a product according to its id.
routerCart.get('/:id', async (req, res) => {
    let id = parseInt(req.params.id);
    if (!isNaN(id)) {
        try {
            const carrito = await Cart.getById(id);
            if (carrito != undefined) {
                res.json({
                    message: 'carrito encontrado',
                    product: carrito
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
        productos: [],
    }]
    if (carrito) {
        try {
            await Cart.save(carrito);
            try {
                const Cart = await Cart.getAll();
                res.json({
                    message: "carrito incorporado",
                    product: carrito
                })
            }
            catch (error) {
                res.json({
                    message: 'No se ha podido obtener la lista de carritos',
                    error: error
                })
            }
        }
        catch (error) {
            res.json({
                message: 'No se ha podido guardar el carrito',
                error: error
            })
        }
    } else {
        res.json({
            message: "Los datos suministrados son incorrectos"
        })
    }
})

//This route updates the product with the selected id
//A property is updated only if it receives a non null value
routerCart.post('/:id/productos', async (req, res) => {
    const id = parseInt(req.params.id);
    let receive = req.body;
    let searchedProduct = {};
    console.log("The id ", id, "receive  ", receive)
    try {
        const Cart = await Cart.getAll();
        const indexc = Cart.findIndex(element => element.id === id);
        searchedProduct = Cart[indexc];
        console.log(indexc, " Modifico ", searchedProduct);
        if (indexc !== -1) {
            const theLength = searchedCart.productos.length
            if (theLength > 0) {
                const indexp = searchedCart.productos.findindex(element => element.id === receive.id);
                Cart[indexc].productos[indexp].cantidad = Cart[indexc].productos[indexp].cantidad + receive.cantidad;
            } else {
                newProduct.id = receive.producto.id;
                newProduct.timestamp = receive.producto.timestamp;
                newProduct.nombre = receive.pronombre;
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

routerCart.delete('/:id/productos', async (req, res) => {
    const id = parseInt(req.params.id);
    let receive = req.body;
    let searchedProduct = {};
    console.log("The id ", id, "receive  ", receive)
    try {
        const Cart = await Cart.getAll();
        const indexc = Cart.findIndex(element => element.id === id);
        searchedCart = Cart[indexc];
        console.log(indexc, "  ", searchedProduct);
        if (indexc !== -1) {
            const theLength = searchedCart.productos.length
            if (theLength > 0) {
                const indexp = searchedCart.productos.findindex(element => element.id === receive.id);
                Cart[indexc].productos[indexp].cantidad = Cart[indexc].productos[indexp].cantidad + receive.cantidad;
            } else {
                newProduct.id = receive.producto.id;
                newProduct.timestamp = receive.producto.timestamp;
                newProduct.nombre = receive.pronombre;
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
            const removedProduct = await Cart.deleteById(id);
            if (removedProduct.length === 0) {
                res.json({
                    message: "El carrito solicitado no existe"
                })
            } else {
                res.json({
                    message: "El carrito ha sido eliminado",
                    product: removedProduct
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