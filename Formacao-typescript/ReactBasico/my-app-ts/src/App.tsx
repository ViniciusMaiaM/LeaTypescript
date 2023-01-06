import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card';

function App() {
  return (
    <>
      <div>
        Hello World!
        <Card />
        <Card />
      </div>
      <div>
        footer
      </div>
    </>
  );
}

export default App;
