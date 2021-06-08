import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';

class Mainpage extends React.Component {
    render() {
        return (
            <div>
                <div className="center">
                    <h1>Welcome to The Library</h1>
                </div>
                <div>
                    <button type="button" className="button">
                        <Link to="/">Home</Link>
                    </button>
                    <br/><br/><br/>
                    <button type="button" className="button">
                        <Link to="/bestsellers">Bestsellers</Link>
                    </button>
                    <br/><br/><br/>
                    <button type="button" className="button">
                        <Link to="/bookshelf">Bookshelf</Link>
                    </button>
                    <br/><br/><br/>
                    <button type="button" className="button">
                        <Link to="/cart">Cart</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Mainpage;