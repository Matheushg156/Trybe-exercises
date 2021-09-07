import React, { Component } from 'react'
import MoreDataField from './MoreDataField';
import PersonalField from './PersonalField';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      age: '',
      aboutYou: '',
      checkNerd: false,
      formularioComErros: true,
    };
  }

  handleError() {
    const { name, email, age, aboutYou, checkNerd } = this.state;

    const errorCases = [
      !name.length,
      !email.match(/^\S+@\S+$/i),
      !age.length,
      !aboutYou.length,
      !checkNerd,
    ];

    const formularioPrenchido = errorCases.every((error) => error !== true);

    this.setState({
      formularioComErros: !formularioPrenchido,
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => { this.handleError(); });
  }

  render() {
    const { name, email, age, aboutYou, checkNerd, formularioComErros } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form>
          <PersonalField
            nameValue={ name }
            emailValue={ email }
            ageValue={ age }
            handleChange={ this.handleChange }
          />

          <MoreDataField
            aboutYouValue={ aboutYou }
            checkNerdChecked={ checkNerd }
            handleChange={ this.handleChange }
          />
        </form>
        { formularioComErros 
        ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
      : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    )
  }
}

export default Form;






  