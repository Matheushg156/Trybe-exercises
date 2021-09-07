import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MoreDataField extends Component {
  render() {
    const { aboutYouValue, checkNerdChecked, handleChange } = this.props;
    return(
      <fieldset>
        <legend>Mais informações</legend>
          <label>
            Fale sobre você:
            <textarea
              id="aboutYou"
              name="aboutYou"
              onChange={ handleChange }
              value={ aboutYouValue }
            />
          </label>

          <label>
            <input
              name="checkNerd"
              type="checkbox"
              checked={ checkNerdChecked }
              onChange={ handleChange }
            />
              Curte animes, jogos e tecnologia?
          </label>

          <label>
            Mande uma foto bacanuda!!!
            <input
              type="file"
            />
          </label>

      </fieldset>
    )
  }
}

MoreDataField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  aboutYouValue: PropTypes.string.isRequired,
  checkNerdChecked: PropTypes.bool.isRequired,
};

export default MoreDataField;
