const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const pessoaDelivery = order.order.delivery.deliveryPerson;
  const nome = order.name;
  const telefone = order.phoneNumber;
  const endereco = `${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;

  console.log(`Olá ${pessoaDelivery}, entrega para: ${nome}, Telefone: ${telefone}, R. ${endereco}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  //modificando os dados.
  order.name = 'Luiz Silva';
  order.order.pizza.marguerita.price = 15;
  order.payment.total = 50;

  //Pegando os dados.
  const nome = order.name;
  const arrayPizzas = Object.keys(order.order.pizza);
  const pizza_01 = arrayPizzas[0];
  const pizza_02 = arrayPizzas[1];
  const bebida = order.order.drinks.coke.type;
  const total = order.payment.total;

  console.log(`Olá ${nome}, o total do seu pedido de ${pizza_01}, ${pizza_02} e ${bebida} é R$ ${total},00.`)
}

orderModifier(order);