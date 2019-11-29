import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import Appnavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';
import { Container } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Appnavbar />
        <ItemModal />
        <ShoppingList />
      </div>
    </Provider>
  );
}

export default App;
