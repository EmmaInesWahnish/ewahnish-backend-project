import express from 'express';
import handlebars from 'express-handlebars';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import AnyContainer from './api/Container.js'

const Products = new AnyContainer('./files/productos.txt');

let productos = [];

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.engine('hbs',
  handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts/', //ruta a la plantilla principal
    partialsDir: __dirname + '/views/partials/' //ruta a los parciales
  })
);

//seteamos el motor de plantillas
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.static('public'));

let bool;

app.get('/', async (req, res) => {
  try {
    productos = await Products.getAll()
  }
  catch (error) {
    console.log(error);
  }
  res.render('form', { productos });
});

app.get('/productos', async (req, res) => {
  try {
    productos = await Products.getAll()
  }
  catch (error) {
    console.log(error);
  }
  (productos.length > 0) ? bool = true : bool = false;
  res.render('products', { productos });
});

app.post('/productos', async (req, res) => {
  let element = [{
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail
  }]
  if (element) {
    try {
      await Products.saveArray(element);
      try {
        productos = await Products.getAll();
        res.redirect('/')
      }
      catch (error) {
        console.log(error)
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  (productos.length > 0) ? bool = true : bool = false;
});

app.get('/', (req, res) => {
  res.render('personas', {
    nombre: 'Daniel',
    apellido: 'Sánchez',
    edad: 52,
    email: 'danielsanchez68@hotmail.com ',
    telefono: '1559607538',
    fyh: new Date().toLocaleString()
  });
});

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
