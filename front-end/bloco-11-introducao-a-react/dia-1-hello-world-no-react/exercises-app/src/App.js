import './App.css';
import React from 'react';
import Header from './header';

const Task = (value) => {
  return (
    <li className='listItens'>{value}</li>
  );
}

const tasks = ['English', 'Logica', 'React', 'Front-end', 'Portifolio', 'Comunicação', 'Meditação'];

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ul>{ tasks.map((task) => Task(task)) }</ul>
      </div>
    )
  }
}

export default App;
