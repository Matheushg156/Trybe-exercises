import React from 'react';
import './App.css';

function handleClick() {
    console.log('Clicou no botão!');
}

class App extends React.Component {
  render() {
    return (
      <button onClick={ handleClick }>Botão</button>
    );
  }
}

export default App;
