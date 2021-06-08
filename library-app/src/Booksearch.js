import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

const Booksearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [books, setBooks] = useState({ items: [] });
    const onInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    let API_URL = `https://www.googleapis.com/books/v1/volumes`;

    const fetchBooks = async () => {
        const result = await axios.get(`${API_URL}?q=${searchTerm}`);
        setBooks(result.data);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetchBooks();
    }

    const bookAuthors = (authors) => {
        if (authors.length <= 2) {
            authors = authors.join(' and ')
        }
        else if (authors.length > 2) {
            let lastAuthor = ' and ' + authors.slice(-1);
            authors.pop();
            authors = authors.join(', ');
            authors += lastAuthor;
        };
        return authors;
    }

    

    return (

        <section>
            <div>
                <div className="center">
                    <h1>Book Search</h1>
                </div>
            </div>
            <br /><br />
            <div className="pic">
                <button type="button" className="button">
                    <Link to="/">Home</Link>
                </button>
                <br />
            <form onSubmit={onSubmitHandler} className="center">
                <label>
                    <input
                        type="search"
                        placeholder="Search for Books..."
                        value={searchTerm}
                        onChange={onInputChange}
                    />
                    <button type="submit">Search</button>
                </label>
            </form>
            <br/> <br />
            <button type="button" className="button">
                        <Link to="/savedbooks">Saved Books</Link>
            </button>
            </div>
            <ul>
                {
                    books.items.map((book, index) => {
                        return (
                            <li key={index}>
                                <div>
                                    <img alt={`${book.volumeInfo.title} book`} src={`http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`} />
                                    <div>
                                        <h3>{book.volumeInfo.title}</h3>
                                        <p>{bookAuthors(book.volumeInfo.authors)}</p>
                                        <p>{book.volumeInfo.publishedDate}</p>
                                        <p>{book.volumeInfo.description}</p>
                                        <a href={book.saleInfo.buyLink}>Click Here to Purchase from Google (if available)</a>
                                        <section>
                                            <br/>
                                            <button type="button" className="button">
                                                <Link to={"/savedbooks"}>Add to Saved Books</Link>
                                            </button>
                                        </section>
                                    </div>
                                </div>
                                <hr />
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
}

export default Booksearch;