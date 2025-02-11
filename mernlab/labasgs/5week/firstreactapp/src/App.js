import './App.css';
import React from 'react';
import StateLessHello from './components/StateLessHello';
import StateFullHello from './components/StateFullHello';
function App() {
  return React.createElement(
    "div",
    null,
    React.createElement(StateLessHello),
    React.createElement(StateFullHello)
  );
}

export default App;
