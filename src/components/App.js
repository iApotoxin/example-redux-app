import React from 'react';
import './App.css';
import CounterContainer from '../containers/CounterContainer';
import ButtonContainer from '../containers/ButtonContainer';
import InputContainer from '../containers/InputContainer';
import NameContainer from '../containers/NameContainer';

const App = () => (
 <div className="App">
   <CounterContainer />
   <ButtonContainer />
   <InputContainer />
   <NameContainer />
 </div>
);

export default App;