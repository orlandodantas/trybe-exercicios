const validateCEP = (cep) => /\d{5}-?\d{3}/.test(cep);

const createError = (message, code, status = 500) => {
  const newError = new Error(message);
  newError.code = code;
  newError.status = status;

  return newError;
}

// Desafio que tal da proxima vez fazer como nesse video aqui: https://trybecourse.slack.com/files/U01M4G3UDPS/F03AE6X8VC1/tratando_erros_e_validando_no_lugar_certo.mp4

// Só que fazer um arquivo único com todas as funções de erro, para os status do range de 400 que pode ser encontrado nos seguintes links: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status & https://www.npmjs.com/package/http-errors

// E os erros de validação da aplicação e de regras de negócio fazer parecidos com o que foi implementado no projeto store manager.

// No caso criarei uma pasta helper com um arquivo error.js que vai conter todas as funções para cada status de erro.

module.exports = {
  validateCEP,
  createError,
}
