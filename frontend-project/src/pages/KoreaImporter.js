import React, { useState } from 'react';
import axios from 'axios';
import './KoreaImporter.css';

function KoreaImporter() {
  const [marca, setMarca] = useState('');
  const [linea, setLinea] = useState('');
  const [modelo, setModelo] = useState('');
  const [cilindraje, setCilindraje] = useState('');
  const [repuestos, setRepuestos] = useState('');
  const [chatResponse, setChatResponse] = useState('');
  const [recomendaciones, setRecomendaciones] = useState([]);

  // Definimos el array de marcas
  const marcas = [
    'Hyundai',
    'Kia',
    'Ssangyong',
    'Daewoo',
    'Samsung',
    'Chevrolet',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/chatbot', {
        marca,
        linea,
        modelo,
        cilindraje,
        repuestos,
      });
      console.log('Respuesta completa del servidor:', response.data);
      setChatResponse(response.data.message);

      // Formatear las recomendaciones
      const recomendacionesFormateadas = response.data.recomendaciones
        .split(/\d+\./)
        .filter((item) => item.trim() !== '')
        .map((item) => item.trim());

      setRecomendaciones(recomendacionesFormateadas);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      setChatResponse('Hubo un error al procesar tu solicitud.');
      setRecomendaciones([]);
    }
  };

  return (
    <div className="korea-importer">
      <h1>Importadora Korea S.A.S.</h1>
      <p>Porque en tu negocio y en tu auto cada parte vale</p>

      <h2>Cotiza tus Autopartes</h2>
      <form onSubmit={handleSubmit} className="chatbot-form">
        <select
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
          required
        >
          <option value="">Selecciona una marca</option>
          {marcas.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={linea}
          onChange={(e) => setLinea(e.target.value)}
          placeholder="Línea"
          required
        />
        <input
          type="text"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
          placeholder="Modelo"
          required
        />
        <input
          type="text"
          value={cilindraje}
          onChange={(e) => setCilindraje(e.target.value)}
          placeholder="Cilindraje"
          required
        />
        <textarea
          value={repuestos}
          onChange={(e) => setRepuestos(e.target.value)}
          placeholder="Repuestos"
          required
        />
        <button type="submit">Cotizar</button>
      </form>

      {chatResponse && <p className="chatbot-response">{chatResponse}</p>}
      {recomendaciones.length > 0 && (
        <div className="recomendaciones">
          <h3>Recomendaciones adicionales:</h3>
          <ul>
            {recomendaciones.map((recomendacion, index) => (
              <li key={index}>{recomendacion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default KoreaImporter;
