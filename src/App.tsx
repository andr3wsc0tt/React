import React from 'react';
import './App.css';
import { tsConstructorType } from '@babel/types';

import Card from './Card'
import './Card.css'
import InputEvents from './events/InputEvents'
import MovementEvents from './events/MovementEvents'
import FormValidation from './FormValidation'

function App() {
  return (
    <div className="App">
      {/* <Card/>
      <Card/>
      <Card/> */}
      {/* <InputEvents/>
      <MovementEvents/> */}
      <FormValidation/>

    </div>
  );
}

export default App;
