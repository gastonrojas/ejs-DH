const about = {
    titulo: 'Pimienta & Sal',
    descripcion: `Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.`,
    historia: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
}

const listaPlatos = [
    {
        id:1,
        titulo: 'Carpaccio fresco',
        descripcionCorta: 'Entrada Carpaccio de salmón con cítricos',
        descripcionDetallada: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        precio: '65.50',
        img: '/images/Carpaccio-de-salmon.jpg',
    },
    {
        id:2,
        titulo: 'Risotto de berenjena',
        descripcionCorta: 'Risotto de berenjena y queso de cabra',
        descripcionDetallada: '',
        precio: '47.00',
        img: '/images/Risotto-berenjena-queso-cabra.jpg'
    },
    {
        id:3,
        titulo: 'Mousse de arroz',
        descripcionCorta: 'Mousse de arroz con leche y aroma de azahar',
        descripcionDetallada: '',
        precio: '27.50',
        img: '/images/Mousse-de-arroz-con-leche.jpg'
    },
    {
        id:4,
        titulo: 'Espárragos blancos',
        descripcionCorta: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        descripcionDetallada: '',
        precio: '37.50',
        img: '/images/esparragos.png'
    }
]

const mainController ={
    index(req, res){    
        res.render('index', {about, listaPlatos})
    },
    detalle(req, res){
        console.log(req.params)
        const plato = listaPlatos.find(plato => parseInt(plato.id) === parseInt(req.params.id))
        console.log(plato)
        if (plato) return res.render('detalleMenu', {plato})
        res.render('detalleMenu', {plato: listaPlatos[0]})
    }
}


module.exports = mainController