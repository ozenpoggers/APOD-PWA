# 🚀 NASA APOD PWA

Este projeto é uma **Progressive Web App (PWA)** que consome a API **Astronomy Picture of the Day (APOD)** da NASA.  
Ele exibe diariamente uma foto astronômica, com título traduzido para português, descrição original (com opção de tradução via Google Translate), data e créditos da imagem.

---

## ✨ Funcionalidades
- Exibe a **foto ou vídeo astronômico do dia** diretamente da API da NASA.
- Mostra o **título traduzido para português** usando a API gratuita MyMemory.
- Inclui a **descrição original em inglês** com link para tradução no Google Translate.
- Exibe a **data formatada (DD/MM/YYYY)**.
- Mostra os **créditos da foto** quando disponíveis.
- Interface estilizada com **fundo espacial** e layout responsivo.

---

## 🛠️ Tecnologias utilizadas
- **HTML5 / CSS3 / JavaScript**
- **NASA APOD API**
- **MyMemory Translation API**
- **Google Translate (link externo)**
- **Docker + Nginx** para servir a aplicação

---

## 📦 Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nasa-apod-pwa.git
   cd nasa-apod-pwa

2. Construa a imagem Docker:
   docker build -t nasa-apod-pwa .

3. Rode o container: 
   docker run -d -p 8080:80 nasa-apod-pwa

4. Acesse no navegador:
   http://localhost:8080
   
