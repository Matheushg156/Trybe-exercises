import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      age: '',
      aboutYou: '',
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
    const { name, email, age, aboutYou } = this.state;
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form>
          <label>
            Nome:
            <input
              id="name"
              name="name"
              type="text"
              onChange={this.handleChange}
              value={ name }
            />
          </label>

          <label>
            Email:
            <input
              id="email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={ email }
            />
          </label>

          <label>
            Idade:
            <select
              id="age"
              name="age"
              onChange={this.handleChange}
              value={ age }
            >
              <option value="">Selecione</option>
              <option value="adult">Maior que 18</option>
              <option value="underage">Menor que 18</option>
            </select>
          </label>

          <label>
            Fale sobre você:
            <textarea
              id="aboutYou"
              name="aboutYou"
              onChange={this.handleChange}
              value={ aboutYou }
            />
          </label>
        </form>
      </div>
    )
  }
}

export default Form;






  