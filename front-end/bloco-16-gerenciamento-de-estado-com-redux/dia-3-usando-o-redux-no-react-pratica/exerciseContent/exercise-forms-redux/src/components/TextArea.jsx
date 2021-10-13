import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextArea extends Component {
  render() {
    const { id, labelText, name, value, handleChange, maxLength } = this.props;
    return (
      <label htmlFor={ id }>
        { labelText }
        <textarea
          id={ id }
          name={ name }
          maxLength={ maxLength }
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
  maxLength: PropTypes.string.isRequired,
};

export default TextArea;
