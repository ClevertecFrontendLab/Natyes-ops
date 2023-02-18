import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

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

    const [burger, setBurger] = useState(false);
    const toggleBurger = () => burger ? 'show' : 'hide';
    const clickBurger = () => setBurger(!burger);
    const closeBurger = () => setBurger(false);
    
    const { bookId }= useParams();
    const current = useSelector(state => state.library.currentBook);
    const data = useSelector(state => state.app.data);
    const loading = useSelector(state => state.app.loading);
    const error = useSelector(state => state.app.error);
    const dispatch = useDispatch();
    
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
            <Crumbs link={data && !error ? current.title : ''} category={data ?  current.categories[0] : ''} />
        </div>
        <main className="container book-main">
            {error && <Error/>}
            {(loading && !error) && <Loader/>}
            {
                mWidth > cWidth ? <MenuList showMenu={toggleBurger()} closeBurger={closeBurger} burger={burger}/> : ''
            }
            {data && <BookInfo/>}
        </main>
        <div className="container">
            <Footer/>
        </div>
    </div>

);
}
 