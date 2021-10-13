import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { setPersonalValue } from '../redux/actions/actions';
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
    const { history, dispatchSetValue } = this.props;
    // Disparamos a nossa action através da função importada
    // de actions.js, que apelidamos de dispatchSetValue
    dispatchSetValue(this.state);
    history.push('/professionalForm');
  }

  render() {
    const { name, email, cpf, address, city, states } = this.state;
    const statesArray = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará',
      'Distrito Federal', 'Espirito Santo', 'Goiás', 'Maranhão',
      'Mato Grosso do Sul', 'Mato Grosso', 'Minas Gerais', 'Pará',
      'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro',
      'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima',
      'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];
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
            defaultOption="Selecione"
            options={ statesArray }
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
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  // dispatchSetValue é um "apelido" para executarmos a nossa action creator
  // Nossa action creator é a função importada do arquivo actions
  // ou seja, setPersonalValue,
  // que vai receber um parâmetro
  // esse parâmetro é o estado do nosso componente
  // aqui estamos apenas avisando que vai existir um parâmetro
  // mas o estado do componente é passado no momento da execução
  // nesse caso, dentro da função onSubmitForm
  dispatchSetValue: (valueAndName) => dispatch(setPersonalValue(valueAndName)),
}
);

export default connect(null, mapDispatchToProps)(PersonalForm);
