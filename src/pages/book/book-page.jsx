import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { BookInfo } from '../../components/book-info';
import { Crumbs } from '../../components/crumbs';
import { Header } from '../../components/header';
import { MenuList } from '../../components/menu';
import { getBook } from '../../services/api';

import './book-page.css';

export const BookPage = () => {
    
    const [burger, setBurger] = useState(false);
    const toggleBurger = () => burger ? 'show' : 'hide';
    const clickBurger = () => setBurger(!burger);
    const closeBurger = () => setBurger(false);
    
    const { bookId }= useParams();
    const current = useSelector(state => state.library.currentBook);
    const loading = useSelector(state => state.app.data);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getBook(bookId))
    }, [dispatch, bookId]);

    const mWidth = 992;
    const cWidth = document.body.clientWidth;

    return(
    <div className="book-page">
        <div className="container">
            <Header onClick={clickBurger} active={toggleBurger()}/>
        </div>
        {loading && <Crumbs link={current.title} category={current.categories[0]}/>}
        <main className="container book-main">
            {
                mWidth > cWidth ? <MenuList showMenu={toggleBurger()} closeBurger={closeBurger} burger={burger}/> : ''
            }
            {loading && <BookInfo/>}
        </main>
    </div>

);
}
 