import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { professionalInputs, personalInputs } = this.props;
    const { name, email, cpf, address, city, states } = personalInputs;
    const { resume, job, jobDescription } = professionalInputs;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {name}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { address }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { states }
        </div>
        <div>
          Currículo:
          { resume }
        </div>
        <div>
          Cargo:
          { job }
        </div>
        <div>
          Descrição do cargo:
          { jobDescription }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  professionalInputs: PropTypes.objectOf(PropTypes.string).isRequired,
  personalInputs: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  personalInputs: state.reducer.personalInputs,
  professionalInputs: state.reducer.professionalInputs }
);

export default connect(mapStateToProps)(FormDataDisplay);
// funcionaria como (mapStateToProps, null)
