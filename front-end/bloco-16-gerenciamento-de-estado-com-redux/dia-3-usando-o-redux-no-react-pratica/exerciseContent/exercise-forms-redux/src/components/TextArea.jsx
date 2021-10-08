import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { id, labelText, name, value, handleChange } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <textarea
          id={ id }
          name={ name }
          value={ value }
          onChange={ handleChange }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default TextArea;
