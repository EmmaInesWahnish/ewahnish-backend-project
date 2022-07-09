routerCart.post('/:id/productos', async (req, res) => {
    const id = parseInt(req.params.id);
    let indexc = 0
    let receive = req.body;
    let searchedCart = [];
    let carts = []
    try {
        carts = await Cart.getAll();
        indexc = carts.findIndex(element => element.id === id);
        searchedCart = carts[indexc];
        const productArray = searchedCart.productos;
        if (indexc !== -1) {
            const indexp = productArray.findIndex(element => element.id === receive.id);
            if (indexp !== -1) {
                carts[indexc].productos[indexp].cantidad = carts[indexc].productos[indexp].cantidad + receive.cantidad;
            }
            else{
                carts[indexc].productos.push(receive);
            }
            try {
                await fs.promises.unlink('./files/carrito.txt');
                try {
                    await Cart.saveArray(carts);
                    res.json({
                        message: 'Modificacion exitosa',
                        product: carts
                    })
                }
                catch(error) 
                {
                    res.json({
                        message: 'No fue posible cargar los productos en productos.txt',
                        error: error
                    })                    
                }
            }
            catch(error) 
            {
                res.json({
                    message: 'No se pudo borrar el archivo productos.txt',
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