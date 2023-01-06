import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}

export default App;
