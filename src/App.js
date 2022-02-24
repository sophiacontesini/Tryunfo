import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: '',
      number1: '',
      number2: '',
      number3: '',
      img: '',
      rare: '',
      check: false,
      infos: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value, id } = target;
    this.setState({
      [name]: id === 'check' ? target.checked : value,
    });
  }

  saveButton = () => {
    const { name, description, number1, number2, number3, img, rare, check } = this.state;
    const infos = [{ name, description, number1, number2, number3, img, rare, check }];
    this.setState((prevState) => ({
      name: '',
      description: '',
      number1: 0,
      number2: 0,
      number3: 0,
      img: '',
      rare: 'normal',
      check: false,
      infos: [...prevState.infos, infos],
    }));
  }

  render() {
    const { name, description, number1, number2, number3, img, rare, check } = this.state;
    const saveInput = [name, description, img, rare];
    const sumVal = [number1, number2, number3];
    const num = 90;
    const zero = 0;
    const numMax = 210;
    const checkInput = saveInput.every((el) => el !== '');// retorna booleano se os inputs estao preenchidos
    const sum = sumVal.map((el) => Number(el)).reduce((acc, cV) => acc + cV);
    const max = sumVal.every((el) => el >= zero && el <= num);
    const numMin = sum <= numMax; // verifica se a soma é menor q 210
    console.log(numMin);

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.handleChange }
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ number1 }
          cardAttr2={ number2 }
          cardAttr3={ number3 }
          cardImage={ img }
          cardRare={ rare }
          cardTrunfo={ check }
          isSaveButtonDisabled={ !(checkInput && max && numMin) }
          onSaveButtonClick={ this.saveButton }
        />
        <Card
          onInputChange={ this.handleChange }
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ number1 }
          cardAttr2={ number2 }
          cardAttr3={ number3 }
          cardImage={ img }
          cardRare={ rare }
          cardTrunfo={ check }
        />
      </div>
    );
  }
}

export default App;
