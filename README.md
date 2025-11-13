#  APOD API

Este projeto é uma **Progressive Web App (PWA)** que usa a API **Astronomy Picture of the Day (APOD)** da NASA.  
Ele exibe diariamente uma foto astronômica, com título traduzido para português, descrição original (com opção de tradução via Google Translate), data e créditos da imagem.

---


##  Pré-requisitos

- [Docker](https://docs.docker.com/get-docker/) instalado  
- (Opcional) [Node.js](https://nodejs.org/) caso queira rodar testes localmente  
- Uma chave da API da NASA (gratuita em: [https://api.nasa.gov](https://api.nasa.gov))
- Git para clonar o repositório

---
##  Funcionalidades
- Exibe a **foto ou vídeo astronômico do dia** diretamente da API da NASA.
- Mostra o **título traduzido para português** usando a API gratuita MyMemory.
- Inclui a **descrição original em inglês** com link para tradução no Google Translate.
- Exibe a **data formatada (DD/MM/YYYY)**.
- Mostra os **créditos da foto** quando disponíveis.
- Interface estilizada com **fundo espacial** e layout responsivo.

---

##  Tecnologias utilizadas
- **HTML5 / CSS3 / JavaScript**
- **NASA APOD API**
- **MyMemory Translation API**
- **Google Translate (link externo)**
- **Docker + Nginx** para servir a aplicação

---

##  Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/nasa-apod-pwa.git
   cd nasa-apod-pwa
2. Configurar a chave da NASA:
     ```bash
   1. Crie um arquivo .env na raiz do projeto.
     
   2. Copie o conteúdo do .env.example e substitua pela sua chave real: NASA_API_KEY=sua_chave_real_aqui

4. Construa a imagem Docker:
    ```bash
   docker-compose up --build

5. Acesse no navegador:
    ```bash
   http://localhost:81
    

