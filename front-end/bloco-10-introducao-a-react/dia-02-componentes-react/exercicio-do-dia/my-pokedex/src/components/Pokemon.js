import React from 'react';
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props.objPokemon;

    return (
      <div className="info-content">
        <div className="info">
        <h3>{name}</h3>
        <p>{type}</p>
        <p>{`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        </div>
        
        <div className="image">
          <img src={image} alt={name}></img>
        </div>
      </div>
    );
  }


};

Pokemon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  averageWeight: PropTypes.object,
  image: PropTypes.string
}

export default Pokemon;
