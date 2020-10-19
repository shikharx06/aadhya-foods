import React from 'react';
import Main from './Pages/index'
import Fontface from './theme/fonts';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Main style={{ Fontface }} />
      </BrowserRouter>
    </>
  );
}

export default App;
