import React from 'react';
import './Pokemon.css';


class Pokemon extends React.Component {
  render(){
    const { id, name, type, averageWeight: { value, measurementUnit }, image, moreInfo } = this.props.pokemon;
    return (
      <div className="pokemon">
        <p>{name}</p>
        <p>{type}</p>
        <p>{value}{measurementUnit}</p>
        <img src={image} alt={`Imagem do pokemon ${name}`} />
        <a href={moreInfo} target="blanked">More Info</a>
      </div>
    );
  }
}

export default Pokemon;
