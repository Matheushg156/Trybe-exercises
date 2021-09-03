import React from 'react';
import './App.css';

function handleClick() {
    console.log('Clicou no botão!');
}

function handleClick2() {
  console.log('Xablau!');
}

function handleClick3() {
  console.log('Xulambs!');
}

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ handleClick }>Botão 1</button>
        <button onClick={ handleClick2 }>Botão 2</button>
        <button onClick={ handleClick3 }>Botão 3</button>
      </div>
    );
  }
}

export default App;
