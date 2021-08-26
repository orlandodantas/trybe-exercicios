const custo = 35;
const venda = 90;
const imposto = (custo * 20) / 100;
const custoTotalItem = custo + imposto;

const lucro = (venda * 1000) - (custoTotalItem * 1000);

console.log(lucro);