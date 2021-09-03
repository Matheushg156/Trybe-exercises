import React from 'react';
import './Pokemon.css';
import PropTypes from 'prop-types';


class Pokemon extends React.Component {
  render(){
    const { id, name, type, averageWeight: { value, measurementUnit }, image, moreInfo } = this.props.pokemon;
    return (
      <section className="pokemon">
        <div className="pokemonBody">
        <h3>{name}</h3>
        <p>{type}</p>
        <p>Average weight: {value}{measurementUnit}</p>
        <a className="link" href={moreInfo} target="blanked">More Info</a>
        </div>
        <div className="pokemonImg">
          <img src={image} alt={`Imagem do pokemon ${name}`} />
        </div>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape(
    {
      name: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
      moreInfo: PropTypes.string,
      image: PropTypes.string,
    },
  ).isRequired,
};

export default Pokemon;
