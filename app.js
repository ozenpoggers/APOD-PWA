// Função de tradução usando MyMemory (para o título)
async function traduzir(texto) {
  const res = await fetch(
    "https://api.mymemory.translated.net/get?q=" + encodeURIComponent(texto) + "&langpair=en|pt"
  );
  const data = await res.json();
  return data.responseData.translatedText;
}

document.getElementById('mostrarFoto').addEventListener('click', async () => {
  try {
    const dataEscolhida = document.getElementById('dataFoto').value;

    // Monta a URL da API com ou sem data
    const url = dataEscolhida
      ? `https://api.nasa.gov/planetary/apod?api_key=uivj3yvcO6nxuFfSfNdhCMOm0wZziP6clg00DJXD&date=${dataEscolhida}`
      : `https://api.nasa.gov/planetary/apod?api_key=uivj3yvcO6nxuFfSfNdhCMOm0wZziP6clg00DJXD`;

    const res = await fetch(url);
    const data = await res.json();

    if (data.error) {
      document.getElementById('fotoDia').textContent = 'Erro da API: ' + data.error.message;
      return;
    }

    // traduzir título
    const tituloTraduzido = await traduzir(data.title);

    // formata a data
    const dataFormatada = new Date(data.date).toLocaleDateString('pt-BR');

    let conteudo = `
      <h2>${tituloTraduzido}</h2>
      <h3>${dataFormatada}</h3>
    `;

    if (data.media_type === "image") {
      conteudo += `<img src="${data.url}" alt="${data.title}" style="max-width:100%;border-radius:8px"/>`;
    } else if (data.media_type === "video") {
      conteudo += `<iframe src="${data.url}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
    }

    // descrição + link para traduzir
    conteudo += `
      <p><strong>Explicação:</strong> ${data.explanation}</p>
      <a href="https://translate.google.com/?sl=en&tl=pt&text=${encodeURIComponent(data.explanation)}" target="_blank">
        Traduzir descrição no Google Translate
      </a>
    `;

    // créditos da foto (se existirem)
    if (data.copyright) {
      conteudo += `
        <p><strong>Créditos da imagem:</strong> ${data.copyright}</p>
      `;
    }

    document.getElementById('fotoDia').innerHTML = conteudo;

  } catch (error) {
    document.getElementById('fotoDia').textContent = 'Erro ao carregar a foto';
    console.error(error);
  }
});
