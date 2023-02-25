import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom';

import { BookInfo } from '../../components/book-info';
import { Crumbs } from '../../components/crumbs';
import { Error } from '../../components/error';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Loader } from '../../components/loader';
import { MenuList } from '../../components/menu';
import { getBook } from '../../services/api';

import './book-page.css';

export const BookPage = () => {
    const { bookId, category }= useParams();
    const [burger, setBurger] = useState(false);
    const toggleBurger = () => burger ? 'show' : 'hide';
    const clickBurger = () => setBurger(!burger);
    const closeBurger = () => setBurger(false);

    const current = useSelector(state => state.library.currentBook);
    const data = useSelector(state => state.app.data);
    const loading = useSelector(state => state.app.loading);
    const categoryBook = useSelector(state => state.library.category)
    const error = useSelector(state => state.app.error);
    const dispatch = useDispatch();
    const getCategory = () => category === 'all' ? 'Все книги' : categoryBook.find(i => i.path === category).name;
    
    useEffect(() => {
        dispatch(getBook(bookId))
    }, [dispatch, bookId]);

    const mWidth = 992;
    const cWidth = document.body.clientWidth;

    return(
    <div className="book-page">
        <div className="head">
            <div className="container">
                <Header onClick={clickBurger} active={toggleBurger()}/>
            </div>
            <Crumbs link={data && !error ? current.title : ''} category={categoryBook.length && getCategory()} path={category}/>
        </div>
        <main className="container book-main">
            {error && <Error/>}
            {(loading && !error) && <Loader/>}
            {
                mWidth > cWidth ? <MenuList showMenu={toggleBurger()} closeBurger={closeBurger} burger={burger}/> : ''
            }
            {data && <BookInfo current={current}/>}
        </main>
        <div className="container">
            <Footer/>
        </div>
    </div>

);
}
 