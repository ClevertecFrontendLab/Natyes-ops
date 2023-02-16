/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getLibrary } from '../../services/api';
import { Book } from '../book';
import { Filter } from '../filter';

import './book-list.css';

export const BookList = () => {
    const books = useSelector(state => state.library.books)
    const loading = useSelector(state => state.app.loading)

    const dispatch = useDispatch()

    const [view, setView] = useState('grid');
    const bookView = `books ${view}`;

    const getBooks = useCallback(() => {
        dispatch(getLibrary())
    },[dispatch])

    useEffect(() => {
        if (!books.length) {
            getBooks()
        }
    }, [getBooks, books]);

    return(
        <main>
        <Filter view={view} onClick={value => setView(value)}/>
        <div className={bookView}>
            {!loading && books.map(book => 
                <Link className='block' to={`/books/${book.category}/${book.id}`} state={{propsBook: book}} key={book.id}>
                    <Book book={book} key={book.id} view={view}/>
                </Link>
            )}
        </div>
    </main>
    )
}
