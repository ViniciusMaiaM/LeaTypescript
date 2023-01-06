import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <div>
        Hello World!
        <Card 
          id={1}  /*É necessário passar o parâmetro dessa maneira */
          paragraph='TypeScript'
          details='Ts para frontend e backend'
        /> 
        <Card 
          id={2}
          paragraph='HTML'
          details='HTML para frontend'
          />
      </div>
      <Footer/>
    </>
  );
}

export default App;
