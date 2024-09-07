# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Korea Importer - Frontend

## Descripción

Este es el frontend de la aplicación Korea Importer, un sistema de cotización de autopartes para vehículos coreanos. Está construido con React y se comunica con un backend Node.js/Express para obtener datos y procesar solicitudes.

## Estructura del Proyecto

frontend/
│
├── public/
│ └── index.html
│
├── src/
│ ├── pages/
│ │ ├── KoreaImporter.js
│ │ └── KoreaImporter.css
│ │
│ ├── App.js
│ └── index.js
│
├── package.json
└── README.md


## Componentes Principales

### KoreaImporter.js

Este es el componente principal que contiene:
- Formulario de cotización
- Lógica para enviar solicitudes al backend
- Visualización de resultados y recomendaciones

### KoreaImporter.css

Contiene los estilos específicos para el componente KoreaImporter.

## Instalación y Ejecución

1. Clona el repositorio
2. Navega al directorio del frontend:
   ```
   cd frontend
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Inicia la aplicación:
   ```
   npm start
   ```

La aplicación estará disponible en `http://localhost:3000`.

## Conexión con el Backend

Este frontend se comunica con un backend Node.js/Express a través de llamadas API. La URL base del backend está configurada como `http://localhost:3001` en el archivo `KoreaImporter.js`.

Principales puntos de interacción:

1. Envío de formulario:
   ```javascript
   const response = await axios.post('http://localhost:3001/api/chatbot', {
     marca,
     linea,
     modelo,
     cilindraje,
     repuestos,
   });
   ```

2. Recepción de datos:
   ```javascript
   setChatResponse(response.data.message);
   setRecomendaciones(response.data.recomendaciones);
   ```

## Dependencias Principales

- React: Framework de UI
- Axios: Cliente HTTP para realizar peticiones al backend

## Scripts Disponibles

- `npm start`: Inicia la aplicación en modo de desarrollo
- `npm build`: Construye la aplicación para producción
- `npm test`: Ejecuta las pruebas
- `npm run eject`: Expone las configuraciones de Create React App

## Próximos Pasos

- Implementar sistema de autenticación de usuarios
- Añadir más opciones de filtrado en la búsqueda
- Mejorar la UI/UX con animaciones y diseño responsivo
- Implementar un carrito de compras

Para más detalles sobre el backend y cómo se integra con este frontend, consulta el [README del Backend](../backend/README.md).