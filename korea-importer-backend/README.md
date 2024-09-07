# Korea Importer - Backend

## Descripción

Este es el backend de la aplicación Korea Importer, un sistema de cotización de autopartes para vehículos coreanos. Está construido con Node.js y Express, y se integra con MongoDB para el almacenamiento de datos y OpenAI para generar recomendaciones de venta cruzada.

## Estructura del Proyecto

backend/
│
├── src/
│ ├── controllers/
│ ├── models/
│ │ └── repuesto.js
│ ├── routes/
│ ├── services/
│ │ └── openai.js
│ ├── db/
│ │ └── mongoose.js
│ └── app.js
│
├── .env
├── package.json
└── README.md


## Componentes Principales

### app.js

Punto de entrada de la aplicación. Configura Express y define las rutas principales.

### models/repuesto.js

Define el esquema de MongoDB para los repuestos.

### services/openai.js

Contiene la lógica para interactuar con la API de OpenAI y generar recomendaciones.

### db/mongoose.js

Configura la conexión a MongoDB.

## Instalación y Ejecución

1. Clona el repositorio
2. Navega al directorio del backend:
   ```
   cd backend
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   PORT=3001
   MONGODB_URI=tu_uri_de_mongodb_aqui
   OPENAI_API_KEY=tu_clave_api_de_openai_aqui
   ```
5. Inicia el servidor:
   ```
   npm run dev
   ```

El servidor estará disponible en `http://localhost:3001`.

## API Endpoints

- `POST /api/chatbot`: Recibe solicitudes de cotización y devuelve resultados y recomendaciones

## Conexión con el Frontend

Este backend está diseñado para trabajar con un frontend React. Las principales interacciones incluyen:

1. Recepción de solicitudes:
   ```javascript
   app.post('/api/chatbot', async (req, res) => {
     const { marca, linea, modelo, cilindraje, repuestos } = req.body;
     // Lógica de procesamiento
   });
   ```

2. Envío de respuestas:
   ```javascript
   res.json({ 
     message: `Resultados para ${marca} ${linea} ${modelo} ${cilindraje}:\n${respuesta}`,
     recomendaciones: recomendaciones
   });
   ```

## Dependencias Principales

- Express: Framework web
- Mongoose: ODM para MongoDB
- OpenAI: Cliente para la API de OpenAI
- Dotenv: Para manejar variables de entorno

## Scripts Disponibles

- `npm run dev`: Inicia el servidor con nodemon para desarrollo
- `npm start`: Inicia el servidor en modo producción

## Próximos Pasos

- Implementar autenticación y autorización
- Añadir más endpoints para gestión de inventario
- Implementar caché para mejorar el rendimiento
- Añadir pruebas unitarias y de integración

Para más detalles sobre el frontend y cómo se integra con este backend, consulta el [README del Frontend](../frontend/README.md).