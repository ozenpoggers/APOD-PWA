document.getElementById('mostrarFoto').addEventListener('click', async () => {
  try {
    const dataEscolhida = document.getElementById('dataFoto').value;

    // Chama o backend, que injeta a chave
    const API_URL = "https://apod-pwa.onrender.com/apod";
    const url = dataEscolhida ? `${API_URL}?date=${dataEscolhida}` : API_URL;

    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      document.getElementById('fotoDia').textContent = 'Erro da API: ' + data.error.message;
      return;
    }

    const dataFormatada = new Date(data.date).toLocaleDateString('pt-BR');

    let conteudo = `
      <h2>${data.title}</h2>
      <h3>${dataFormatada}</h3>
    `;

    if (data.media_type === "image") {
      conteudo += `<img src="${data.url}" alt="${data.title}" style="max-width:100%;border-radius:8px"/>`;
    } else if (data.media_type === "video") {
      conteudo += `<iframe src="${data.url}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
    }

    conteudo += `
      <p><strong>Explicação:</strong> ${data.explanation}</p>
      <a href="https://translate.google.com/?sl=en&tl=pt&text=${encodeURIComponent(data.explanation)}" target="_blank">
        Traduzir descrição no Google Translate
      </a>
    `;

    if (data.copyright) {
      conteudo += `<p><strong>Créditos da imagem:</strong> ${data.copyright}</p>`;
    }

    document.getElementById('fotoDia').innerHTML = conteudo;

  } catch (error) {
    document.getElementById('fotoDia').textContent = 'Erro ao carregar a foto';
    console.error(error);
  }
});
