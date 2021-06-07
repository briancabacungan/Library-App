import logo from './logo.svg';
import './App.css';
import React from 'react';
import Mainpage from './Mainpage';
import Bestsellers from './Bestsellers';
import Bookshelf from './Bookshelf';
import Cart from './Cart';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Mainpage />

        <button class="button">Home
          <Router>
            <Switch>
              <Route exact path="/Main"/>
            </Switch>
          </Router>
        </button>

        <br/>
        <br/>
        <br/>

        <button class="button">Bestsellers
          <Router>
            <Switch>
              <Route path="/Bestsellers" component={Bestsellers}/>
            </Switch>
          </Router>
        </button>

        <br/>
        <br/>
        <br/>

        <button class="button">Bookshelf
          <Router>
            <Switch>
              <Route exact path="/" />
            </Switch>
          </Router>
        </button>

        <br/>
        <br/>
        <br/>

        <button class="button">Cart
          <Router>
            <Switch>
              <Route exact path="/" />
            </Switch>
          </Router>
        </button>

      </div>
    )
  }
}

export default App;