import React from 'react';
import './App.css';
import { tsConstructorType } from '@babel/types';

import Card from './Card'
import './Card.css'
import InputEvents from './events/InputEvents'

function App() {
  return (
    <div className="App">
      {/* <Card/>
      <Card/>
      <Card/> */}
      <InputEvents/>
    </div>
  );
}

export default App;
