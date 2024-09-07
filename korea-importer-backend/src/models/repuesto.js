const mongoose = require('mongoose');

const repuestoSchema = new mongoose.Schema({
  marca: String,
  linea: String,
  modelo: String,
  cilindraje: String,
  nombre: String,
  precio: Number,
  disponibilidad: Boolean
});

module.exports = mongoose.model('Repuesto', repuestoSchema);
