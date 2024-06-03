const express = require('express');
const router = express.Router();
const cuadrado = require('../calculos');
const sueldo = require('../calculoSueldo');

router.get('/calculos/:width', (req, res) => {
    const { width } = req.params;
    let a = cuadrado.area(width);
    let b = cuadrado.perimetro(width);

    console.log(width, a, b);
    res.send({
        ancho: width,
        area: a,
        perimetro: b
    });
});

router.get('/', function(req, res){
    res.sendFile(process.cwd() + '/public/index.html');
});


router.post('/calculoSueldo', (req, res) => {
    // Recibe los datos del trabajador del body de la petición
    const { nombre, horasTrabajadas, pagoPorHora, categoria } = req.body;

    // Valida que todos los datos se hayan enviado
    if (!nombre || !horasTrabajadas || !pagoPorHora || !categoria) {
        return res.status(400).send({ message: 'Faltan datos del trabajador' });
    }
    console.log('Datos del trabajador');
    console.log(nombre, horasTrabajadas, pagoPorHora, categoria);

    // Calcula el bono, sueldo bruto, etc. utilizando las funciones exportadas
    const bono = sueldo.obtenerBono(categoria);
    const sueldoBruto = sueldo.calcularSueldoBruto(horasTrabajadas, pagoPorHora);
    const sueldoNetoAntesImpuestos = sueldo.calcularSueldoNetoAntesImpuestos(sueldoBruto, bono);
    const sueldoNetoDespuesImpuestos = sueldo.calcularSueldoNetoDespuesImpuestos(sueldoNetoAntesImpuestos);

    console.log('Resultados');
    console.log(bono, sueldoBruto, sueldoNetoAntesImpuestos, sueldoNetoDespuesImpuestos);

    // Prepara la respuesta con los datos del trabajador y el desglose del sueldo
    const respuesta = {
        nombre,
        categoria,
        bono,
        sueldoBruto,
        sueldoNetoAntesImpuestos,
        sueldoNetoDespuesImpuestos,
    };

    res.json(respuesta);
});



router.get('/', (req,res) => {
    res.send({message:"hola mundo soy DIEGO RUAN PADILLA"});
});

router.get('/ayuda', (req,res) => {
    res.send({message:"En que te ayudo soy DIEGO RUAN PADILLA"});
});

router.get('/ayuda/:name', (req,res) => {
    res.send({message:`Hola ${req.params.name} en que te ayudo`});
});

router.get('/prueba', (req,res) => {
    res.send({message:`Hola ${req.query.name} ${req.query.apellido}`});
});

router.get('/datos', (req, res) => {
    res.send(
    {
    "secretBase": "Super tower",
    "active": true,
    "members": [
    {
    "name": " Diego Ruan Padilla",
    "age": 29,
    "secretIdentity": "Unknown",
    "powers": [
    "Radiation resistance",
    "Turning tiny",
    "Radiation blast"
    ]
    },
    {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
    "Million tonne punch",
    "Damage resistance",
    "Superhuman reflexes"
    ]
    },
    {
    "name": "Eternal Flame",
    "age": 1000000,
    "secretIdentity": "Unknown",
    "powers": [
    "Immortality",
    "Heat Immunity",
    "Inferno",
    "Teleportation",
    "Interdimensional travel"
    ]
    }
    ]
    });
});

//POSTMAN

router.post("/ayuda", (req, res) => {
    console.log("Cuerpo de la peticion", req.body);
    res.send({
        message:"Hola mundo en que te puedo ayudar, soy una peticion POST",
    });
});

router.post("/producto", (req, res) => {
    console.log("Cuerpo de la peticion", req.body);
    
    const {nombre, precio, piezas} = req.body;
    console.log(nombre);
    console.log(precio);
    console.log(piezas);
    res.send({
        message:"Producto creado",
    });
});

router.post("/producto/:id", (req, res) => {
    const {id} = req.params;
    const {estilo} = req.query;
    const {precio} = req.body;
    console.log(id, estilo, precio);
    res.json({
        stockmin: 10,
        stockmax: 20,
        existencia: 15,
    });
});

module.exports = router;
