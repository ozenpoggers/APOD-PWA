const express = require("express");
const fetch = require("node-fetch");

const app = express();
const NASA_API_KEY = process.env.NASA_API_KEY;

app.use(express.static(".")); // serve index.html, app.js, style.css

app.get("/apod", async (req, res) => {
  const date = req.query.date || "";
  const url = date
    ? `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`
    : `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao acessar API da NASA" });
  }
});

app.listen(80, () => console.log("Servidor rodando na porta 80"));


