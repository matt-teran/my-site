import React from 'react';
import './App.css';
import Aux from './hoc/Aux';
import Backdrop from './components/UI/Backdrop/Backdrop';
import Toolbar from './components/Navigation/Toolbar/Toolbar';
import Jumbotron from './components/Pages/Art/Jumbotron/Jumbotron';
import Gallery from './components/Pages/Art/Gallery/Gallery';

function App() {
  return (
    <Aux>
      <Toolbar/>
      <Jumbotron/>
      <Gallery/>
      {/* <Backdrop/> */}
    </Aux>
  );
}

export default App;
