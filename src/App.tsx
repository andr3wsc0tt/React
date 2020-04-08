import React from 'react';
import './App.css';
import { tsConstructorType } from '@babel/types';

import Card from './Card'
import './Card.css'

function App() {
  return (
    <div className="App">
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}

export default App;
