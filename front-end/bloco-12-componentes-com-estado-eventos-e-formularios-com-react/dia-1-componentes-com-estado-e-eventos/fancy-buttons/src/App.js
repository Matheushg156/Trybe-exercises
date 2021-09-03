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
    console.log('this do botão:', this);
  }

    handleClick2() {
      console.log('this do botão 2:', this);
  }

    handleClick3() {
      console.log('this do botão 3:', this);
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
