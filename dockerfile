# Usar una imagen base ligera de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar solo las dependencias de producción
RUN npm install --only=production

# Copiar el resto del código de la aplicación
COPY . .

# Exponer el puerto que usa la app
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]