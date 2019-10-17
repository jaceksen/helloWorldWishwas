import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <Message />
      <Greet name="Component">
        <p>This is children props</p>
        <h3>Title H3</h3>
      </Greet>
      <Greet name="Component2">
        <button>Action</button>
      </Greet>
      <Welcome rodzaj="Component2"/>
      <Hello />
    </div>
  );
}

export default App;
