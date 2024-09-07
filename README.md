# Workshop5-Group5-Korea
Workshop5-Group5-Korea


# Korea Importer - Sistema de Cotización de Autopartes

## Descripción General

Korea Importer es una aplicación web completa diseñada para facilitar la cotización de autopartes para vehículos coreanos. El sistema consta de un frontend interactivo desarrollado en React y un backend robusto construido con Node.js y Express, integrado con MongoDB para el almacenamiento de datos y la API de OpenAI para generar recomendaciones de venta cruzada inteligentes.

## Estructura del Proyecto

El proyecto está organizado en dos componentes principales:

korea-importer/
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── pages/
│ │ │ ├── KoreaImporter.js
│ │ │ └── KoreaImporter.css
│ │ ├── App.js
│ │ └── index.js
│ ├── Dockerfile
│ └── package.json
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ │ └── repuesto.js
│ │ ├── routes/
│ │ ├── services/
│ │ │ └── openai.js
│ │ ├── db/
│ │ │ └── mongoose.js
│ │ └── app.js
│ ├── Dockerfile
│ └── package.json
│
├── docker-compose.yml
└── README.md


## Componentes del Proyecto

### Frontend (React)

El frontend proporciona una interfaz de usuario intuitiva para que los clientes puedan solicitar cotizaciones de autopartes.

Características principales:
- Formulario de cotización para autopartes
- Visualización de resultados de búsqueda
- Presentación de recomendaciones de venta cruzada

Tecnologías utilizadas:
- React
- Axios para las llamadas API
- CSS para estilos

### Backend (Node.js/Express)

El backend maneja las solicitudes del frontend, interactúa con la base de datos y genera recomendaciones utilizando IA.

Características principales:
- API RESTful para procesar solicitudes de cotización
- Integración con MongoDB para almacenar y consultar datos de repuestos
- Utilización de la API de OpenAI para generar recomendaciones de venta cruzada

Tecnologías utilizadas:
- Node.js y Express
- MongoDB con Mongoose ODM
- OpenAI API

## Configuración y Ejecución

### Requisitos Previos

- Docker y Docker Compose instalados en el sistema

### Pasos para Ejecutar

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/korea-importer.git
   cd korea-importer
   ```

2. Configura las variables de entorno:
   - Crea un archivo `.env` en el directorio `backend/` con las siguientes variables:
     ```
     PORT=3001
     MONGODB_URI=mongodb://mongodb:27017/korea_importer
     OPENAI_API_KEY=tu_clave_api_de_openai_aqui
     ```

3. Construye y ejecuta los contenedores:
   ```
   docker-compose up --build
   ```

4. Accede a la aplicación:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## Uso de la Aplicación

1. Abre el navegador y ve a http://localhost:3000
2. Completa el formulario de cotización con los detalles del vehículo y las autopartes requeridas
3. Envía el formulario para recibir los resultados de la cotización y las recomendaciones de venta cruzada

## Desarrollo

Para trabajar en el desarrollo de la aplicación:

1. Frontend:
   ```
   cd frontend
   npm install
   npm start
   ```

2. Backend:
   ```
   cd backend
   npm install
   npm run dev
   ```

## Pruebas

- Frontend: `cd frontend && npm test`
- Backend: `cd backend && npm test`

## Despliegue

La aplicación está contenerizada y lista para ser desplegada en cualquier plataforma que soporte Docker. Asegúrate de configurar las variables de entorno adecuadamente en el entorno de producción.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios propuestos antes de hacer un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.
