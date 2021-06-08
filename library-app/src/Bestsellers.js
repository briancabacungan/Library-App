import React from 'react';
import {Link} from 'react-router-dom';

class Bestsellers extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Bestsellers</h1>
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

export default Bestsellers;