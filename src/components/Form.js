import { PropTypes } from 'prop-types';
import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    const trunfoCard = hasTrunfo
      ? 'Você já tem um Super Trunfo em seu baralho' : (
        <label htmlFor="check">
          <input
            type="checkbox"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            data-testid="trunfo-input"
            name="check"
            id="check"
          />
        </label>
      );

    return (
      <form className="formulario">
        <label htmlFor="name">
          <input
            type="text"
            value={ cardName }
            onChange={ onInputChange }
            data-testid="name-input"
            name="name"
            id="name"
          />
        </label>
        <label htmlFor="description">
          <input
            type="textarea"
            value={ cardDescription }
            onChange={ onInputChange }
            data-testid="description-input"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="number1">
          Atributo 1:
          <input
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
            data-testid="attr1-input"
            name="number1"
            id="number1"
          />
        </label>
        <label htmlFor="number2">
          Atributo 2:
          <input
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
            data-testid="attr2-input"
            name="number2"
            id="number2"
          />
        </label>
        <label htmlFor="number3">
          Atributo 3:
          <input
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
            data-testid="attr3-input"
            name="number3"
            id="number3"
          />
        </label>
        <label htmlFor="img">
          <input
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
            data-testid="image-input"
            name="img"
            id="img"
          />
        </label>
        <label htmlFor="rare">
          <select
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
            name="rare"
            id="rare"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        {
          trunfoCard
        }
        <label htmlFor="button">
          <button
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            data-testid="save-button"
            id="button"
          >
            {' '}
            Salvar

          </button>
        </label>
      </form>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
