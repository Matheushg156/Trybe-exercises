import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextArea from '../components/TextArea';
import Input from '../components/Input';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      resume: '',
      job: '',
      jobDescription: '',
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
    history.push('/formDisplay');
  }

  render() {
    const { resume, job, jobDescription } = this.state;
    return (
      <form>
        <fieldset>
          Informações Profissionais
          <TextArea
            labelText="Resumo do currículo:"
            id="inputResume"
            name="resume"
            value={ resume }
            handleChange={ this.handleChange }
          />
          <Input
            labelText="Cargo:"
            id="inputJob"
            name="job"
            value={ job }
            handleChange={ this.handleChange }
          />
          <TextArea
            labelText="Descrição do cargo:"
            id="inputJobDescription"
            name="jobDescription"
            value={ jobDescription }
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

ProfessionalForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProfessionalForm;
