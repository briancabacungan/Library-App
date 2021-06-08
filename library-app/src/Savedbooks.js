import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';


class Savedbooks extends React.Component {
    render() {
        return (
            <div>
                <div className="center">
                    <h1>Welcome to Your Saved Books</h1>
                </div>
                <div className="pic">
                    <button type="button" className="button">
                        <Link to="/">Home</Link>
                    </button>
                    <br /><br /><br />
                    <button type="button" className="button">
                        <Link to="/booksearch">Book Search</Link>
                    </button>
                    <br /><br /><br />
                    <button type="button" className="button">
                        <Link to="/savedbooks">Saved Books</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Savedbooks;