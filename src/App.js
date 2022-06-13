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
      infos: [],
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
    const { infos } = this.state;
    const saveInput = [name, description, img, rare];
    const sumVal = [number1, number2, number3];
    const num = 90;
    const zero = 0;
    const numMax = 210;
    const checkInput = saveInput.every((el) => el !== '');// retorna booleano se os inputs estao preenchidos
    const sum = sumVal.map((el) => Number(el)).reduce((acc, cV) => acc + cV);
    const max = sumVal.every((el) => el >= zero && el <= num);
    const numMin = sum <= numMax; // verifica se a soma é menor q 210
    const infoMap = infos.flatMap((el) => el)
      .map((trunfo) => trunfo.check).some((el) => el === true);
    console.log(infoMap);

    return (
      <div>
        <h1 className="title">Marvel x DC</h1>
        <h2 className="addCard">Adicione sua carta</h2>
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
          hasTrunfo={ infoMap }
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
        <div>
          {
            infos.flatMap((el) => el).map((card) => (
              <Card
                cardName={ card.name }
                cardDescription={ card.description }
                cardAttr1={ card.number1 }
                cardAttr2={ card.number2 }
                cardAttr3={ card.number3 }
                cardImage={ card.img }
                cardRare={ card.rare }
                cardTrunfo={ card.check }
                key={ card.name }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default App;
