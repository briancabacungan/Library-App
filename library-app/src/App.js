import logo from './logo.svg';
import './App.css';
import React from 'react';
import Mainpage from './Mainpage';
import Bestsellers from './Bestsellers';
import Bookshelf from './Bookshelf';
import Cart from './Cart';
import {BrowserRouter as Router, Route, Switch, Link, BrowserRouter} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Mainpage} />
          <Route path="/bestsellers" component={Bestsellers} />
          <Route path="/bookshelf" component={Bookshelf} />
          <Route path="/cart" component={Cart} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;