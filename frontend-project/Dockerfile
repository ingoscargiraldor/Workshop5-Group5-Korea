# Usa una imagen base de Node
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Instala serve para servir la aplicación
RUN npm install -g serve

# Expone el puerto 3000
EXPOSE 3000

# Comando para servir la aplicación
CMD ["serve", "-s", "build", "-l", "3000"]
