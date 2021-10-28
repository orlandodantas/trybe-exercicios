import React from 'react'

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const paragraphy = (item) => {
  return <p>{item}</p>
}

class Content extends React.Component {
  render() {
    return(
    <div className="conteudo">
      {conteudos.map(({ conteudo, bloco, status }) => (
        <div key={conteudo} className="item-conteudo">
          <h3>{`O conteudo é: ${conteudo}`}</h3>
          {paragraphy(`status: ${status}`)}
          {paragraphy(`bloco: ${bloco}`)}
        </div>
      ))}
    </div>
    )
  }
}

export default Content;