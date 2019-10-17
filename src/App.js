import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClssClick';
import EventBind from './components/EventBind';
import ParentCompnent from './components/ParentCompnent';

function App() {
  return (
    <div className="App">
      <ParentCompnent />
      <EventBind />
      <ClassClick />
      <FunctionClick />
      <Counter />
      <Message />
      <Greet name="Component">
        <p>This is children props</p>
        <h3>Title H3</h3>
      </Greet>
      <Greet name="Component2" name2="Component3">
        <button>Action</button>
      </Greet>
      <Welcome rodzaj="Rodzaj1" rodzaj2="Rodzaj2"/>
      <Hello />
    </div>
  );
}

export default App;
