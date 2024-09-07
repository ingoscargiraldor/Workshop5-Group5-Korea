const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Repuesto = require('../models/repuesto');

dotenv.config();

const repuestosData = [
  {
    marca: 'Hyundai',
    linea: 'Accent',
    modelo: '2018',
    cilindraje: '1600',
    nombre: 'Pastillas de freno delanteras',
    precio: 50,
    disponibilidad: true
  },
  {
    marca: 'Kia',
    linea: 'Sportage',
    modelo: '2020',
    cilindraje: '2000',
    nombre: 'Filtro de aceite',
    precio: 15,
    disponibilidad: true
  },
  {
    marca: 'Kia',
    linea: 'Sportage',
    modelo: '2020',
    cilindraje: '2000',
    nombre: 'Filtro de aire',
    precio: 20,
    disponibilidad: false
  },
  // Añade más repuestos aquí...
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a MongoDB Atlas');

    await Repuesto.deleteMany({});
    console.log('Datos anteriores eliminados');

    await Repuesto.insertMany(repuestosData);
    console.log('Nuevos datos insertados');

    mongoose.disconnect();
    console.log('Desconectado de MongoDB Atlas');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
};

seedDatabase();
