const formCadastrosClientes = document.querySelector("[data-form]");

formCadastrosClientes.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = event.target.querySelector("[data-nome]").value;
  const cpf = event.target.querySelector("[data-cpf]").value;

  if (validaCPF(cpf) && cpf.length === 11) {
    cadastrarClientes(cpf, nome);
  } else {
    alert("O CPF não é válido");
  }
});
