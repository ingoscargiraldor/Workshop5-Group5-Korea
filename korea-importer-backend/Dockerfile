# Usa una imagen base de Node
FROM node:16

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto
COPY . .

# Expone el puerto 3001
EXPOSE 3001

# Comando para iniciar la aplicación
CMD ["npm", "run", "dev"]
