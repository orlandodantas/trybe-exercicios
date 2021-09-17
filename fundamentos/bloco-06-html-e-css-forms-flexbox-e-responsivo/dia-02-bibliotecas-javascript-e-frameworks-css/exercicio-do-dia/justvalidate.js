new window.JustValidate('#form', {
  rules : {
    name: {
      required: true,
      maxLength: 40
    },
    email: {
      required: true,
      maxLength: 50,
      email: true
    },
    cpf: {
      required: true,
      maxLength: 11,
      function: (name, value) =>  {
        const custom = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
        return custom.test(value);
      }
    },
    endereco: {
      required: true,
      maxLength: 200
    },
    cidade: {
      required: true,
      maxLength: 28
    },
    uf: {
      required: true
    },
    moradia: {
      required: true
    },
    resumo: {
      required: true,
      maxLength: 1000
    },
    cargo: {
      required: true,
      maxLength: 40
    },
    descCargo: {
      required: true,
      maxLength: 500
    },
    data: {
      required: true
    },
  },
  messages : {
    name: {
      required: 'Digite seu nome',
      maxLength: 'Só é permitido até quarenta caracteres'
    },
    email: {
      required: 'Digite um e-mail',
      maxLength: 'só é permitido até 50 caracteres',
      email: 'Digite um e-mail valido'
    },
    cpf: {
      required: 'Digite seu CPF',
      maxLength: 'Só é permitido até 11 caracteres',
      function: 'CPF Inválido'
    },
    endereco: {
      required: 'Digite o endereco',
      maxLength: 'Só é permitido até 200 caracteres'
    },
    cidade: {
      required: 'Digite a cidade',
      maxLength: 'Só é permitido até 28 caracteres'
    },
    uf: {
      required: 'Selecione uma UF'
    },
    moradia: {
      required: 'Selecione uma moradia'
    },
    resumo: {
      required: 'Digite um resumo do seu currículo',
      maxLength: 'Só é permitido até 1000 caracteres'
    },
    cargo: {
      required: 'Digite um cargo',
      maxLength: 'Limite de até 40 caracteres'
    },
    descCargo: {
      required: 'Digite a descrição do cargo',
      maxLength: 'Limite de até 500 caracteres'
    },
    data: {
      required: 'Selecione uma data'
    },
  },
});