/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Book } from '../book';
import { Filter } from '../filter';

import './book-list.css';

export const BookList = (props) => {
    const { currentCategory, books } = props;
    const category = useSelector(state => state.library.category)
    const loading = useSelector(state => state.app.loading)

    const [view, setView] = useState('grid');
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState(false);
    const sortChange = () => setSort(!sort);

    const categoryBook = books.filter(book => currentCategory === 'Все книги' ? books : book.categories.includes(currentCategory))

    const searchBook = categoryBook.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));

    const sortBook = sort ? searchBook.sort((a,b) => a.rating - b.rating) : searchBook.sort((a,b) => b.rating - a.rating)

    const bookView = `books ${view}`;

    return(
        <main>
        <Filter view={view} onClick={value => setView(value)} onChange={setSearch} sort={sort} sortChange={sortChange}/>
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
            {!loading && categoryBook && searchBook && sortBook.map(book => 
                <Link className='block' to={currentCategory === 'Все книги' ? `/books/all/${book.id}/` : `/books/${category.find(i => i.name === book.categories[0]).path}/${book.id}`} key={book.id}>
                    <Book book={book} key={book.id} view={view} search={search}/>
                </Link>
            )}
        </div>
    </main>
    )
}
