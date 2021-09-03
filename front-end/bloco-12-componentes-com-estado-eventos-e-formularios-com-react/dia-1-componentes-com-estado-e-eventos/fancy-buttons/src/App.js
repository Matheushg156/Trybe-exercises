import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);

    this.state = {
      clickbtn1: 0,
      clickbtn2: 0,
      clickbtn3: 0,
    };
  }

  handleClick() {
    this.setState(() => ({
      clickbtn1: 1,
    }))
  }

    handleClick2() {
      this.setState(() => ({
        clickbtn2: 1,
      }))
  }

    handleClick3() {
      this.setState(() => ({
        clickbtn3: 1,
      }))
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
