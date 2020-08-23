import React from 'react';
import './App.css';
import Aux from './hoc/Aux';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

function App() {
  return (
    <Aux>
      <Backdrop/>
      <Toolbar/>
    </Aux>
  );
}

export default App;
