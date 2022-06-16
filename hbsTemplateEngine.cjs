const express = require('express');

const app = express();

const handlebars = require('express-handlebars');

app.set('view engine', 'handlebars'); // registra el motor de plantillas

app.set('views', './layout')

app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/layouts',
    }));

app.use(express.static('public'))

app.get('/', (req, res) =>{
  res.render('main', {
    layout: 'index'
  })
})    

app.get('/personalData', function (req, res) {
    req.body = {
      nombre: 'Oscar',
      apellido: 'De la Renta',
      edad: 60,
      email: 'jl@gmail.com',
      telefono: '111-1111-1111'
    }
    res.render('index', req.body);
  });
  




/* Server Listen */
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Server http listening at port ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
