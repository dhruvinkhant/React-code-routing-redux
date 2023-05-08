import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppWrapper from './components/AppWrapper';
import Header from './components/Header';
import WrapRouter from './router/WrapRouter';

function App(props) {
  return (
    <div>
      <BrowserRouter>
          <WrapRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;