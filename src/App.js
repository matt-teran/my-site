import React from 'react';
import './App.css';
import Aux from './hoc/Aux';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Jumbotron from './components/Pages/Art/Jumbotron/Jumbotron';

function App() {
  return (
    <Aux>
      <Toolbar/>
      <Jumbotron/>
      <Backdrop/>
    </Aux>
  );
}

export default App;
