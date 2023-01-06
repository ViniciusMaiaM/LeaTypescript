import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card';

function App() {
  return (
    <>
      <div>
        Hello World!
        <Card id={1}/> {/*É necessário passar o parâmetro dessa maneira */} 
        <Card id={2}/>
      </div>
      <div>
        footer
      </div>
    </>
  );
}

export default App;
