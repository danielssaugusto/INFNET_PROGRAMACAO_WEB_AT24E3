// Manipulando o DOM
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("projetos-section");

  for (const dado of dados) {
    const card = `
            <section class="projeto-card">
                <img src="${dado.image}" alt="Imagem do projeto">
                <h2>${dado.titulo}</h2>
                <p>
                    ${dado.descricao}
                </p>
                <div class="button-projeto">
                    <button class="github-button" type="button"><a href="${dado.link}">Ver no GitHub</a></button>
                </div>

            </section>
        `;

    container.innerHTML += card;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("tecnologias");

  for (const tecnologia of tecnologias) {
    const card = `
            <div class="tecnologias-card">
                <h2 class="titulo-habilidade">${tecnologia.nomeTecnologia}</h2>
                <p class="descricao-habilidade paragrafo-interno">
                    ${tecnologia.descricaoTecnologia}
                </p>
            </div>
        `;

    container.innerHTML += card;
  }
});
