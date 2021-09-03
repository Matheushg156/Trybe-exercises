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
    }))
  }

    handleClick2() {
      this.setState((prevState) => ({
        clickBtn2: prevState.clickBtn2 + 1,
      }))
  }

    handleClick3() {
      this.setState((prevState) => ({
        clickBtn3: prevState.clickBtn3 + 1,
      }))
  }

  render() {
    return (
      <div>
        <button onClick={ this.handleClick }>Botão 1 | Count = { this.state.clickBtn1 }</button>
        <button onClick={ this.handleClick2 }>Botão 2 | Count = { this.state.clickBtn2 }</button>
        <button onClick={ this.handleClick3 }>Botão 3 | Count = { this.state.clickBtn3 }</button>
      </div>
    );
  }
}

export default App;
