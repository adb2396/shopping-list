import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Appnavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Appnavbar />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
