document.addEventListener("DOMContentLoaded", (event) => {
  buscarInscritos();
  construirModal();
});
function construiModal() {
  const botaoSaibaMais = document.getElementById("saiba-mais");
  const modal = document.getElementById("modal");
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
function buscarInscritos() {
  // fetch("https://jsonplaceholder.typicode.com/users")
  fetch("json/inscritos.json")
    .then((res) => res.json())
    .then((res) => {
      const divInscritos = document.getElementById("inscritos");
      res.forEach((user) => {
        const novoParagrafo = document.createElement("p");
        novoParagrafo.textContent = `Nome: ${user.name}`;
        divInscritos.appendChild(novoParagrafo);
      });
    })
    .catch((e) => console.log(e));
}
