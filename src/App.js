import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import WrapRouter from './router/WrapRouter';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
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