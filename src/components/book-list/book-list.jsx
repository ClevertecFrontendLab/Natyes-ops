/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getLibrary } from '../../services/api';
import { Book } from '../book';
import { Filter } from '../filter';

import './book-list.css';

export const BookList = (props) => {
    const { currentCategory } = props;
    const books = useSelector(state => state.library.books)
    const category = useSelector(state => state.library.category)
    const loading = useSelector(state => state.app.loading)
    const dispatch = useDispatch()

    const [view, setView] = useState('grid');
    const [search, setSearch] = useState('');

    const categoryBook = books.filter(book => currentCategory === 'Все книги' ? books : book.categories.includes(currentCategory))

    const searchBook = categoryBook.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));

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
        <Filter view={view} onClick={value => setView(value)} onChange={setSearch}/>
        {!categoryBook.length &&
            <div className='none-books h3 black40' data-test-id='empty-category'>
                В этой категории книг ещё нет
            </div>
        }
        {!searchBook.length && categoryBook.length > 0 &&
            <div className='none-books h3 black40' data-test-id='search-result-not-found'>
                По запросу ничего не найдено
            </div>
        }
        <div className={bookView}>
            {!loading && categoryBook && searchBook && searchBook.map(book => 
                <Link className='block' to={`/books/${category.find(i => i.name === book.categories[0]).path}/${book.id}`} key={book.id}>
                    <Book book={book} key={book.id} view={view} search={search}/>
                </Link>
            )}
        </div>
    </main>
    )
}
