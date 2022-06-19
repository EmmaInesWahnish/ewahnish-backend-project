import AnyContainer from './Container.js';
const products = [
    {
        title: "Cazuela de Mariscos",
        price: 500,
        thumbnail: "ejsProject/public/images/cazuela.png",
    },
    {
        title: "Choripan con Chimichurri",
        thumbnail: "ejsProject/public/images/choripan.png",
        price: 350
    },
    {
        title: "Carne a la olla con verduras",
        price: 450,
        thumbnail: "ejsProject/public/images/carne-a-la-olla.png",
    },
    {
        title: "Pierna de cordero rellena",
        price: 500,
        thumbnail: "ejsProject/public/images/cordero.png",
    },
    {
        title: "Frutillas",
        price: 500,
        thumbnail: "ejsProject/public/images/frutillas.jpg",
    },
    {
        title: "Locro",
        thumbnail: "ejsProject/public/images/carne-a-la-olla.png",
        price: 350
    },
    {
        title: "Omelette",
        price: 450,
        thumbnail: "ejsProject/public/images/carne-a-la-olla.png",
    },
    {
        title: "Tiramisu",
        price: 500,
        thumbnail: "ejsProject/public/images/tiramisu.jpg",
    },
]

const Products = new AnyContainer('./files/productos.txt');

async function anyContainerLoader() {

    await Products.deleteLoadExpress(products)
    
}

export default anyContainerLoader;
