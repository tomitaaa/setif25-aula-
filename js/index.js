function alterarTema() {
  const tema = document.body.getAttribute("data-theme");
  const novoTema = tema == "light" ? "dark" : "light";
  document.body.setAttribute("data-theme", novoTema);

  const btAlterarTema = document.getElementById("btAlterarTema");
  btAlterarTema.textContent = "Light";
  if (novoTema == "light") {
    btAlterarTema.textContent = "Dark";
  }
  function buscarInscritos() {
    fetch("json/inscritos.json").then((res) => {
      console.log(res);
    });
  }
}
