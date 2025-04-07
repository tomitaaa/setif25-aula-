document.addEventListener("DOMContentLoaded", (event) => {
  buscarInscritos();
  construirModal();

  const temaLocal = localStorage.getItem("tema");
  document.body.setAttribute("data-theme", temaLocal);
});

let idiomaAtual = "pt";

function alterarIdioma() {
  idiomaAtual = idiomaAtual == "pt" ? "en" : "pt";
  carregarIdioma(idiomaAtual);
}

function carregarIdioma(idioma) {
  fetch(`json/${idioma}.json`)
    .then((data) => data.json())
    .then((data) => {
      traduzirPagina(data);
    });

  function traduzirPagina(Linguagem) {
    document.querySelectorAll("[data-i18n]").forEach((elemento) => {
      const chave = elemento.getAttribute("data-i18n");

      if (Linguagem[chave]) {
        elemento.textContent = Linguagem[chave];
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((elemento) => {
      const chave = elemento.getAttribute("data-i18n-alt");

      if (Linguagem[chave]) {
        // elemento.textContent = Linguagem[chave];
        elemento.setAttribute("alt", linguagem[chave]);
      }
    });
  }
}

function construirModal() {
  const botaoSaibaMais = document.getElementById("saiba-mais");
  const modal = document.getElementById("modal");
  const botaoFechar = document.getElementById("fechar-modal");

  botaoFechar.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  botaoSaibaMais.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  window.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target == modal) {
      modal.classList.add("hidden");
    }
  });
}
function buscarInscritos() {
  //fetch("https://jsonplaceholder.typicode.com/users")
  fetch("json/inscritos.json")
    .then((res) => res.json())
    .then((res) => {
      //alert("Na requisição");
      const divInscritos = document.getElementById("inscritos");
      res.forEach((user) => {
        const novoParagrafo = document.createElement("p");
        novoParagrafo.textContent = `Nome: ${user.nome}`;
        divInscritos.appendChild(novoParagrafo);
      });
    })
    .catch((e) => console.log(e));

  //alert("Olá");
}
function alterarTema() {
  const tema = document.body.getAttribute("data-theme");
  const novoTema = tema == "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", novoTema);

  const btAlterarTema = document.getElementById("btAlterarTema");
  btAlterarTema.textContent = "Light";
  if (novoTema == "light") {
    btAlterarTema.textContent = "Dark";
  }
}
