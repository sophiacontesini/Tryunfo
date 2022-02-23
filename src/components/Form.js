/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          <input type="text" data-testid="name-input" name="name" id="name" />
        </label>
        <label htmlFor="description">
          <input
            type="textarea"
            data-testid="description-input"
            name="description"
            id="description"
          />
        </label>
        <label htmlFor="number1">
          <input type="number" data-testid="attr1-input" name="number1" id="number1" />
        </label>
        <label htmlFor="number2">
          <input type="number" data-testid="attr2-input" name="number2" id="number2" />
        </label>
        <label htmlFor="number3">
          <input type="number" data-testid="attr3-input" name="number3" id="number3" />
        </label>
        <label htmlFor="img">
          <input type="text" data-testid="image-input" name="img" id="img" />
        </label>
        <label htmlFor="rare">
          <select data-testid="rare-input" name="rare" id="rare">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="check">
          <input type="checkbox" data-testid="trunfo-input" name="check" id="check" />
        </label>
        <label htmlFor="button">
          <button type="button" data-testid="save-button" id="button">Salvar</button>
        </label>
      </form>
    );
  }
}
export default Form;
