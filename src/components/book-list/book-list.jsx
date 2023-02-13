import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Book } from '../book';
import { Filter } from '../filter';

import './book-list.css';

export const BookList = ({books}) => {
    const [view, setView] = useState('grid');
    const bookView = `books ${view}`;

    return(
        <main>
        <Filter view={view} onClick={value => setView(value)}/>
        <div className={bookView}>
            {books.map(book => 
                <Link className='block' to={`/books/${book.category}/${book.id}`} state={{propsBook: book}} key={book.id}>
                    <Book book={book} key={book.id} view={view}/>
                </Link>
            )}
        </div>
    </main>
    )
}
