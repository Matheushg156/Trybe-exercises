import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }

  handleClick() {
    console.log('Clicou no botão!');
  }

    handleClick2() {
      console.log('Xablau!');
  }

    handleClick3() {
      console.log('Xulambs!');
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>Botão 1</button>
        <button onClick={ this.handleClick2 }>Botão 2</button>
        <button onClick={ this.handleClick3 }>Botão 3</button>
      </div>
    );
  }
}

export default App;
