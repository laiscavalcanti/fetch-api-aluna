function verificaCPFInvalidos(cpf) {
  const cpfsInvalidos = [
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
    "00000000000",
  ];

  return cpfsInvalidos.indexOf(cpf) === -1;
}

function validaDigitos(cpf) {
  let soma = 0;
  let resto;

  for (indice = 1; indice <= 9; indice++)
    soma = soma + parseInt(cpf.substring(indice - 1, indice)) * (11 - indice);
  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) {
    return false;
  }

  soma = 0;
  for (indice = 1; indice <= 10; indice++)
    soma = soma + parseInt(cpf.substring(indice - 1, indice)) * (12 - indice);
  resto = (soma * 10) % 11;

  if (resto == 10 || resto == 11) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) {
    return false;
  }
  return true;
}

function validaCPF(cpf) {
  return validaDigitos(cpf) && verificaCPFInvalidos(cpf);
}
