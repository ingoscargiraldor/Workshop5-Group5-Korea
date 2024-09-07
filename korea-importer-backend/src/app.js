require('dotenv').config();

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db/mongoose');
const Repuesto = require('./models/repuesto');
const { getCrossSellRecommendations } = require('./services/openai');

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Korea Importadora' });
});

app.post('/api/chatbot', async (req, res) => {
  const { marca, linea, modelo, cilindraje, repuestos } = req.body;
  
  try {
    const repuestosEncontrados = await Repuesto.find({
      marca,
      linea,
      modelo,
      cilindraje,
      nombre: { $in: repuestos.split(',').map(r => r.trim()) }
    });

    let respuesta = '';
    if (repuestosEncontrados.length > 0) {
      respuesta = repuestosEncontrados.map(r => 
        `${r.nombre}: ${r.disponibilidad ? 'Disponible' : 'No disponible'}, Precio: $${r.precio}`
      ).join('\n');
    } else {
      respuesta = `Lo siento, no encontramos repuestos para ${marca} ${linea} ${modelo} ${cilindraje}.`;
    }

    // Obtener recomendaciones de venta cruzada
    const recomendaciones = await getCrossSellRecommendations(repuestos, marca, modelo);
    console.log('Recomendaciones generadas:', recomendaciones);

    res.json({ 
      message: `Resultados para ${marca} ${linea} ${modelo} ${cilindraje}:\n${respuesta}`,
      recomendaciones: recomendaciones
    });
  } catch (error) {
    console.error('Error en la consulta:', error);
    res.status(500).json({ message: 'Error al procesar la solicitud.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
