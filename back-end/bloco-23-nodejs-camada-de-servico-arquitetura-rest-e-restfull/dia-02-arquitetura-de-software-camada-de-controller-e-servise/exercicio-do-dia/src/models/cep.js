const connection = require('./mysqlConnection');

const getByCEP = async (cep) => {
  const [ endereco ] = await connection.execute('SELECT * FROM ceps WHERE cep = ?', [cep]);

  if (endereco.length === 0) return null;
  
  return endereco[0];
}

module.exports = {
  getByCEP,
};
