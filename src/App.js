import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import CalculatorWithHooks from './components/CalculatorWithHooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator />
        <CalculatorWithHooks />
      </header>
    </div>
  );
}

export default App;
