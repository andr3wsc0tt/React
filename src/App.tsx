import React from 'react';
import './App.css';
import { tsConstructorType } from '@babel/types';

import Card from './Card'
import './Card.css'
import InputEvents from './events/InputEvents'
import MovementEvents from './events/MovementEvents'
import FormValidation from './FormValidation'
import ShoppingList from './shoppingList/ShoppingList'
import CardHooks from './CardHooks'

function App() {
  return (
    <div className="App">
      {/* <Card/>
      <Card/>
      <Card/> */}

      {/* <InputEvents/>
      <MovementEvents/> */}

      {/* <FormValidation/> */}

      {/* <ShoppingList/> */}
      <CardHooks/>


    </div>
  );
}

export default App;
