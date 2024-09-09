# Workshop5-Group5-Korea
Workshop5-Group5-Korea


# Korea Importer - Sistema de Cotización de Autopartes

## Descripción General

Korea Importer es una aplicación web completa diseñada para facilitar la cotización de autopartes para vehículos coreanos. El sistema consta de un frontend interactivo desarrollado en React y un backend robusto construido con Node.js y Express, integrado con MongoDB para el almacenamiento de datos y la API de OpenAI para generar recomendaciones de venta cruzada inteligentes.

## Estructura del Proyecto

El proyecto está organizado en dos componentes principales:

```bash
korea-importer/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── KoreaImporter.js
│   │   │   └── KoreaImporter.css
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── repuesto.js
│   │   ├── routes/
│   │   ├── services/
│   │   ├── openai.js
│   │   └── db/
│   │       └── mongoose.js
│   └── app.js
│   └── package.json
└── README.md
```

## Estructura y Descripción de Archivos

### Frontend

- `frontend/src/index.js`: Punto de entrada de la aplicación React.
- `frontend/src/App.js`: Componente principal que define la estructura de la aplicación.
- `frontend/src/pages/KoreaImporter.js`: Componente principal que contiene el formulario de cotización y la lógica para interactuar con el backend.
- `frontend/src/pages/KoreaImporter.css`: Estilos específicos para el componente KoreaImporter.
- `frontend/package.json`: Define las dependencias y scripts del proyecto frontend.

### Backend

- `backend/src/app.js`: Punto de entrada del servidor Express, configura middlewares y rutas.
- `backend/src/db/mongoose.js`: Configura la conexión a la base de datos MongoDB.
- `backend/src/models/repuesto.js`: Define el esquema y modelo de Mongoose para los repuestos.
- `backend/src/services/openai.js`: Contiene la lógica para interactuar con la API de OpenAI.
- `backend/package.json`: Define las dependencias y scripts del proyecto backend.

### Scripts

- `backend/src/scripts/seedDatabase.js`: Script para poblar la base de datos con datos de ejemplo.

### Configuración

- `backend/.env`: Archivo de configuración para variables de entorno (no incluido en el repositorio por seguridad).

### Documentación

- `README.md`: Documentación principal del proyecto, incluyendo instrucciones de instalación y uso.

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
   cd korea-importer-backend
   ```

2. Configura el backend:
   ```
   npm install
   ```
   Crea un archivo `.env` en el directorio `backend/` con las siguientes variables:
   ```
   PORT=3001
   MONGODB_URI=URL mongo atlas
   OPENAI_API_KEY=tu_clave_api_de_openai_aqui
   ```
   No olvide correr el scritpt  
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

## Poblar la Base de Datos

Para facilitar las pruebas y el desarrollo, hemos creado un script para poblar la base de datos con datos de ejemplo. Este script se encuentra en `backend/src/scripts/seedDatabase.js`.

### Cómo ejecutar el script

1. Asegúrate de estar en el directorio del backend:
   ```
   cd korea-importer-backend/src/scripts
   ```

2. Ejecuta el script con Node.js:
   ```
   node seedDatabase.js
   ```

## Uso de la Aplicación

1. Abre el navegador y ve a http://localhost:3000
2. Completa el formulario de cotización con los detalles del vehículo y las autopartes requeridas
3. Envía el formulario para recibir los resultados de la cotización y las recomendaciones de venta cruzada

## Ejemplos

Solicitud en el frontend

![image](https://github.com/user-attachments/assets/cd875101-42bb-4fe6-91a5-6563f6de9a21)

Logs de Backend

```
Solicitando recomendaciones para: Pastillas de freno delanteras Hyundai 2018
Respuesta de OpenAI: 1. Discos de freno delanteros: Los discos de freno y las pastillas de freno trabajan juntos para detener el vehículo de manera eficiente. Es recomendable cambiar ambos componentes al mismo tiempo para asegurar un rendimiento óptimo del sistema de frenos.
2. Filtro de aire: El filtro de aire es un componente importante para mantener el motor del vehículo funcionando de manera eficiente. Un filtro de aire limpio y en buen estado ayuda a mejorar el rendimiento del motor y a prolongar su vida útil.
```

Respuesta en el frontend

![image](https://github.com/user-attachments/assets/d8e3c81a-ff57-445f-b336-02f81ec3a28a)

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


## Ejemplos de Uso

Aquí tienes algunos ejemplos de datos que puedes usar para probar la aplicación:

1. Ejemplo 1:
   - Marca: Hyundai
   - Línea: Accent
   - Modelo: 2018
   - Cilindraje: 1600
   - Repuestos: Pastillas de freno delanteras

2. Ejemplo 2:
   - Marca: Kia
   - Línea: Sportage
   - Modelo: 2020
   - Cilindraje: 2000
   - Repuestos: Filtro de aceite, filtro de aire

3. Ejemplo 3:
   - Marca: Ssangyong
   - Línea: Korando
   - Modelo: 2019
   - Cilindraje: 2200
   - Repuestos: Amortiguadores traseros

4. Ejemplo 4:
   - Marca: Daewoo
   - Línea: Lanos
   - Modelo: 2002
   - Cilindraje: 1500
   - Repuestos: Kit de embrague

5. Ejemplo 5:
   - Marca: Samsung
   - Línea: SM3
   - Modelo: 2015
   - Cilindraje: 1600
   - Repuestos: Bomba de agua, termostato

Estos ejemplos corresponden a los datos incluidos en el script de población de la base de datos y te permitirán probar diferentes escenarios en la aplicación.

## Licencia

Este proyecto está bajo la licencia MIT.

## para ver con contenedores la aplicacion ver la rama Dockerapp
