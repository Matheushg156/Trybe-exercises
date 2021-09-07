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
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, age, aboutYou, checkNerd } = this.state;
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
      </div>
    )
  }
}

export default Form;






  