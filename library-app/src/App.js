import './App.css';
import React from 'react';
import Mainpage from './Mainpage';
import Bookshelf from './Bookshelf';
import Booksearch from './Booksearch';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Mainpage} />
          <Route path="/bookshelf" component={Bookshelf} />
          <Route path="/booksearch" component={Booksearch} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;