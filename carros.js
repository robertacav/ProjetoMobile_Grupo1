const container = document.getElementById('lista-carros');

fetch('carros.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar carros.json');
    }
    return response.json();
  })
  .then(data => {
    const carros = data.carros;
    carros.forEach(carro => {
      const div = document.createElement('div');
      div.className = 'carro';
      div.innerHTML = `
        <img src="${carro.imagem}" alt="${carro.nome}" />
        <h2>${carro.nome}</h2>
        <p><strong>Potência:</strong> ${carro.potencia}</p>
        <p class="preco">${carro.valor}</p>
        <p><strong>Cor:</strong> ${carro.cor}</p>
        <p>${carro.descricao}</p>
        ${carro.novo ? '<div class="badge-novo">Novo</div>' : ''}
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    container.innerHTML = `<p style="color:red;">Erro ao carregar carros: ${error.message}</p>`;
  });
