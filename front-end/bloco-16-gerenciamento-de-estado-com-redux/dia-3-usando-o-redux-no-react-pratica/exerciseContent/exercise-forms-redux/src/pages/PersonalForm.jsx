import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Select from '../components/Select';

class PersonalForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      states: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { history } = this.props;
    history.push('/professionalForm');
  }

  render() {
    const { name, email, cpf, address, city, states } = this.state;
    return (
      <form>
        <fieldset>
          Informações Pessoais
          <Input
            labelText="Nome:"
            id="inputName"
            name="name"
            value={ name }
            handleChange={ this.handleChange }
          />
          <Input
            labelText="Email:"
            id="inputEmail"
            name="email"
            value={ email }
            handleChange={ this.handleChange }
          />
          <Input
            labelText="Cpf:"
            id="inputCpf"
            name="cpf"
            value={ cpf }
            handleChange={ this.handleChange }
          />
          <Input
            labelText="Endereço:"
            id="inputAddress"
            name="address"
            value={ address }
            handleChange={ this.handleChange }
          />
          <Input
            labelText="Cidade:"
            id="inputCity"
            name="city"
            value={ city }
            handleChange={ this.handleChange }
          />
          <Select
            labelText="Estado:"
            id="inputState"
            name="states"
            value={ states }
            handleChange={ this.handleChange }
          />
          <button
            type="button"
            onClick={ this.handleClick }
          >
            Enviar
          </button>
        </fieldset>
      </form>
    );
  }
}

PersonalForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default PersonalForm;
