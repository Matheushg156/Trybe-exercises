import React from 'react';
import Pokemon from './Pokemon';

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

/* name={currentPokemon.name} type={currentPokemon.type} value={currentPokemon.averageWeight.value} measurementUnit={currentPokemon.averageWeight.measurementUnit} image={currentPokemon.image} moreInfo={currentPokemon.moreInfo} */

export default Pokedex;
