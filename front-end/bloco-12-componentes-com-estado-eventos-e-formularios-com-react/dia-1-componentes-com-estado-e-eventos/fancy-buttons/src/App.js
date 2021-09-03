import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      clickBtn1: 0,
      clickBtn2: 0,
      clickBtn3: 0,
    };
  }

  handleClick() {
    this.setState((prevState) => ({
      clickBtn1: prevState.clickBtn1 + 1,
    }), () => {
      console.log(`Botão 1 ${this.changeButtonColor(this.state.clickBtn1)}`);
    });
  }

    handleClick2() {
      this.setState((prevState) => ({
        clickBtn2: prevState.clickBtn2 + 1,
      }), () => {
        console.log(`Botão 2 ${this.changeButtonColor(this.state.clickBtn2)}`);
      });
  }

    handleClick3() {
      this.setState((prevState) => ({
        clickBtn3: prevState.clickBtn3 + 1,
      }), () => {
        console.log(`Botão 3 ${this.changeButtonColor(this.state.clickBtn3)}`);
      })
  }

  changeButtonColor(number) {
    return number % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clickBtn1, clickBtn2, clickBtn3 } = this.state;
    return (
      <div>
        <button onClick={ this.handleClick }
        style={{ backgroundColor: this.changeButtonColor(clickBtn1) }}
        >Botão 1 | Count = { this.state.clickBtn1 }</button>
        <button onClick={ this.handleClick2 }
        style={{ backgroundColor: this.changeButtonColor(clickBtn2) }}
        >Botão 2 | Count = { this.state.clickBtn2 }</button>
        <button onClick={ this.handleClick3 }
        style={{ backgroundColor: this.changeButtonColor(clickBtn3) }}
        >Botão 3 | Count = { this.state.clickBtn3 }</button>
      </div>
    );
  }
}

export default App;
