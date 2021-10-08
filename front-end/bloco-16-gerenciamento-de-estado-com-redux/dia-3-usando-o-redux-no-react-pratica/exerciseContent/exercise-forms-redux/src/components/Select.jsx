import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Select extends Component {
  render() {
    /* const estados = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará',
      'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão',
      'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará',
      'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
      'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima',
      'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']; */

    /* const optionsSelect = estados
      .map((estado) => (<options key={ estado } value={ estado }>{estado}</options>)); */

    const { id, labelText, name, value, handleChange } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <select
          id={ id }
          name={ name }
          value={ value }
          onChange={ handleChange }
        >
          <option value="">Selecione</option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Select;
