FROM node:18-alpine

WORKDIR /app

COPY . .

# Servir os arquivos estáticos com um servidor simples
RUN npm install -g serve

EXPOSE 80

CMD ["serve", "-s", ".", "-l", "80"]
