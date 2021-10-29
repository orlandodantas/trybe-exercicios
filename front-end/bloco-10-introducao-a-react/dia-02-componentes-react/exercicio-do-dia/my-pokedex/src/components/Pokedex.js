import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { listPokemons } = this.props

    return (
      listPokemons.map((itemList) => {
        return(
          <div key={itemList.name} className="cart">
            <Pokemon objPokemon={itemList} />
          </div>
        )
      })
    )
  }
}

export default Pokedex;
