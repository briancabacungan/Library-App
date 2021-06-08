import './App.css';
import React from 'react';
import Mainpage from './Mainpage';
import Savedbooks from './Savedbooks';
import Booksearch from './Booksearch';
import { BrowserRouter as Router, Route, Switch, Link, BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Mainpage} />
          <Route path="/booksearch" component={Booksearch} />
          <Route path="/savedbooks" component={Savedbooks} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;