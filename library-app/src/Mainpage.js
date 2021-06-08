import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Librarypic from './Library.jpg';

class Mainpage extends React.Component {
    render() {
        return (
            <div>
                <div className="center">
                    <h1>Welcome to The Library</h1>
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
                <div className="center">
                    <p>Search for a Book by title</p>
                    <p>Read the description of Searched Books</p>
                    <p>Includes Links to Purchase Book from Google (Must need a Google account to make Purchases)</p>
                    <p>Option to Save Book into Saved Books page</p>
                </div>
            </div>
        )
    }
}

export default Mainpage;