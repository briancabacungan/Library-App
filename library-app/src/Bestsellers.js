import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';


class Bestsellers extends React.Component {
    state = {
        //url: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey',
        bookTitle: null,
        bookAuthor: null,
    }

    componentDidMount() {
        fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    bookTitle: data.results,
                    bookAuthor: data.results
                })
            })
    }

    render() {
        const { bookTitle, bookAuthor } = this.state

        return (
            <div>
                <div className="center">
                    <h1>Bestsellers</h1>
                </div>
                <div className="center">
                    <h3>NY Times Bestsellers</h3>
                </div>
                <div>
                    <button type="button" className="button">
                        <Link to="/">Home</Link>
                    </button>
                    <br /><br /><br />
                    <button type="button" className="button">
                        <Link to="/bestsellers">Bestsellers</Link>
                    </button>
                    <br /><br /><br />
                    <button type="button" className="button">
                        <Link to="/bookshelf">Bookshelf</Link>
                    </button>
                    <br /><br /><br />
                    <button type="button" className="button">
                        <Link to="/cart">Cart</Link>
                    </button>
                </div>
                <div>
                    {bookTitle && this.state.bookTitle.map((book, index) => {
                        return (
                            <h3>{book.title}</h3>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Bestsellers;