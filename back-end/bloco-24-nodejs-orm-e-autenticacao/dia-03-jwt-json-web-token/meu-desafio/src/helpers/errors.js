const invalidParams = (message = 'Parâmetro inválido ou requerido') => {
  const error = new Error(message);
  error.statusCode = 400;

  return error;
};

const unauthenticated = (message = 'Necessário se autenticar') => {
  const error = new Error(message);
  error.statusCode = 401;

  return error;
};

const paymentRequired = (message = 'Pagamento requerido') => {
  const error = new Error(message);
  error.statusCode = 402;

  return error;
};

const unauthorized = (message = 'Usuário não tem permissão para acessar o recurso') => {
  const error = new Error(message);
  error.statusCode = 403;

  return error;
};

const notFound = (message = 'Recurso solicitado não encontrado') => {
  const error = new Error(message);
  error.statusCode = 404;

  return error;
};

const methodNotAllowed = (message = 'O método solicitado foi desativado') => {
  const error = new Error(message);
  error.statusCode = 405;

  return error;
};

const notAcceptable = (message = 'Nenhum recurso encontrado seguindo os critérios fornecidos') => {
  const error = new Error(message);
  error.statusCode = 406;

  return error;
};

const proxyAuthenticationRequired = (message = 'Necessário se autenticar via proxy') => {
  const error = new Error(message);
  error.statusCode = 407;

  return error;
};

const requestTimeout = (message = 'Conexão ociosa') => {
  const error = new Error(message);
  error.statusCode = 408;

  return error;
};

const conflict = (message = 'Recurso já existe') => {
  const error = new Error(message);
  error.statusCode = 409;

  return error;
};

const deletedContents = (message = 'Conteúdo deletado permanentemente') => {
  const error = new Error(message);
  error.statusCode = 410;

  return error;
};

const lengthRequired = (message = 'Obrigatório informar o cabeçalho com o Content-Length') => {
  const error = new Error(message);
  error.statusCode = 411;

  return error;
};

const preconditionFailed = (message = 'Não foi possível atender as pré-condições') => {
  const error = new Error(message);
  error.statusCode = 412;

  return error;
};

const payloadTooLarge = (message = 'Requisição maior que os limites definidos pelo servidor') => {
  const error = new Error(message);
  error.statusCode = 413;

  return error;
};

const URITooLong = (message = 'URI maior do que a aceita pelo servidor') => {
  const error = new Error(message);
  error.statusCode = 414;

  return error;
};

const unsupportedMediaType = (message = 'Formato de mídia não aceito pelo servidor') => {
  const error = new Error(message);
  error.statusCode = 415;

  return error;
};

const requestedRangeNotSatisfiable = (message = 'Range do cabeçalho não pode ser preenchido') => {
  const error = new Error(message);
  error.statusCode = 416;

  return error;
};

const expectationFailed = (message = 'Cabeçalho Expect não pode ser satisfeito pelo servidor') => {
  const error = new Error(message);
  error.statusCode = 417;

  return error;
};

const unprocessableEntity = (message = 'A requisição contém erros semânticos') => {
  const error = new Error(message);
  error.statusCode = 422;

  return error;
};

const upgradeRequired = (message = 'Protocolo usado não é aceito') => {
  const error = new Error(message);
  error.statusCode = 426;

  return error;
};

const tooManyRequests = (message = 'Foram efetuadas muitas requisições em pouco tempo') => {
  const error = new Error(message);
  error.statusCode = 429;

  return error;
};

const requestHeaderFieldsTooLarge = (message = 'Contém campos muito grande no cabeçalho') => {
  const error = new Error(message);
  error.statusCode = 431;

  return error;
};

module.exports = {
  invalidParams,
  unauthenticated,
  paymentRequired,
  unauthorized,
  notFound,
  methodNotAllowed,
  notAcceptable,
  proxyAuthenticationRequired,
  requestTimeout,
  conflict,
  deletedContents,
  lengthRequired,
  preconditionFailed,
  payloadTooLarge,
  URITooLong,
  unsupportedMediaType,
  requestedRangeNotSatisfiable,
  expectationFailed,
  unprocessableEntity,
  upgradeRequired,
  tooManyRequests,
  requestHeaderFieldsTooLarge,
};

// Os status usados acima podem ser encontrados na seguinte página: https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status
