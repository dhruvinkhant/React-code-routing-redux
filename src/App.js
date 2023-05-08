import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppWrapper from './components/AppWrapper';
import Header from './components/Header';
import WrapRouter from './router/WrapRouter';
import { Provider } from 'react-redux';
import store from './redux/store';

function App(props) {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
          <WrapRouter/>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;