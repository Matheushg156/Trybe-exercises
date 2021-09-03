import React from 'react';
import Pokemon from './Pokemon';
import PropTypes from 'prop-types';

class Pokedex extends React.Component {
  render(){
    const { pokemons } = this.props;

    return (
        pokemons.map((currentPokemon) => (
          <Pokemon key={currentPokemon.id} pokemon={currentPokemon} />
        )) 
    );
  }
};

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Pokedex;
