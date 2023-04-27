# Menggunakan base image dari Node.js
FROM node:latest

# Membuat direktori app dan menjadikannya working directory
WORKDIR /app

# Menyalin file package.json dan package-lock.json untuk instalasi dependensi
COPY package*.json ./

# Menjalankan perintah npm install untuk menginstal dependensi
RUN npm install

# Menyalin semua file di direktori proyek ke direktori app
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Menjalankan perintah untuk menjalankan API Node.js
CMD ["npm", "start"]
