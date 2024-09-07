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
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── KoreaImporter.js
│   │   │   └── KoreaImporter.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   │   └── repuesto.js
│   │   ├── routes/
│   │   ├── services/
│   │   │   └── openai.js
│   │   ├── db/
│   │   │   └── mongoose.js
│   │   └── app.js
│   └── package.json
│
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

- Node.js y npm instalados en el sistema
- MongoDB instalado y en ejecución
- Cuenta de OpenAI y clave API

### Pasos para Ejecutar

1. Clona el repositorio:
   ```
   git clone https://github.com/tu-usuario/korea-importer.git
   cd korea-importer
   ```

2. Configura el backend:
   ```
   cd backend
   npm install
   ```
   Crea un archivo `.env` en el directorio `backend/` con las siguientes variables:
   ```
   PORT=3001
   MONGODB_URI=mongodb://localhost:27017/korea_importer
   OPENAI_API_KEY=tu_clave_api_de_openai_aqui
   ```

3. Inicia el backend:
   ```
   npm run dev
   ```

4. Configura el frontend:
   ```
   cd ../frontend
   npm install
   ```

5. Inicia el frontend:
   ```
   npm start
   ```

6. Accede a la aplicación:
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

Para el despliegue en producción, asegúrate de:
1. Configurar las variables de entorno adecuadamente
2. Construir la versión de producción del frontend: `cd frontend && npm run build`
3. Configurar un servidor web como Nginx para servir los archivos estáticos del frontend
4. Configurar un proceso manager como PM2 para ejecutar el backend

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue para discutir los cambios propuestos antes de hacer un pull request.

## Licencia

Este proyecto está bajo la licencia MIT.

## para ver con contenedores la aplicacion ver la rama Dockerapp