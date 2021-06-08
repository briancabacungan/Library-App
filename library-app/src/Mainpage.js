import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Bestsellers from './Bestsellers';

class Mainpage extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Welcome to The Library</h1>
                </div>
                <div>
                    <button type="button">
                        <Link to="/">Home</Link>
                    </button>
                    <br/><br/><br/>
                    <button type="button">
                        <Link to="/bestsellers">Bestsellers</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Mainpage;