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
    };
  }

  handleChange = ({ target }) => {
    const { name, value, id } = target;
    this.setState({
      [name]: id === 'check' ? target.checked : value,
    });
  }

  render() {
    const { name, description, number1, number2, number3, img, rare, check } = this.state;
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
