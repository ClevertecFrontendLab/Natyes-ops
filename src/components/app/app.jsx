import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { downLoader } from '../../redux/app-slice';
import { getLibrary } from '../../services/api';
import { BookList } from '../book-list';
import { ContractPage } from '../contract';
import { Error } from '../error';
import { Footer } from '../footer';
import { Header } from '../header';
import { Loader } from '../loader';
import { MenuList } from '../menu';
import { TermsPage } from '../terms';

import './app.css';

export const App = () => {
    const root = useLocation();
    const path = root.pathname;
    const books = useSelector(state => state.library.books)
    const loading = useSelector(state => state.app.loading);
    const categoryBook = useSelector(state => state.library.category)
    const error = useSelector(state => state.app.error);

    const getCategory = () => categoryBook.length && categoryBook.find(i => `/books/${i.path}` === path).name;
    const activeCategory = () => path === '/' || path === '/books/all' ? 'Все книги' : getCategory();
    const [category, setCategory] = useState(activeCategory());
    const [burger, setBurger] = useState(false);
    
    const activeLink = () => path ===  '/' ? <BookList currentCategory={category} books={books}/> : path ===  '/terms' ? <TermsPage/> : path ===  '/contract' ? <ContractPage/> : <BookList currentCategory={category} books={books}/>;

    const toggleBurger = () => burger ? 'show' : 'hide';
    const clickBurger = () => setBurger(!burger);
    const closeBurger = () => setBurger(false);

    const dispatch = useDispatch()
    
    const getBooks = useCallback(() => {
        dispatch(getLibrary())
    },[dispatch])

    useEffect(() => {
        if (!books.length || root.state) {
            getBooks()
        }
        if (path === '/terms' || path ===  '/contract') {
            dispatch(downLoader())
        }
    }, [path, dispatch, getBooks, books, root])
    // burger ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'; 

    return(
        <div className='container'>
            <Header onClick={clickBurger} active={toggleBurger()}/>
            <div className="main">
                {error && <Error/>}
                {(loading && !error && books) && <Loader/>}
                <MenuList 
                    showMenu={toggleBurger()} 
                    clickBurger={clickBurger} 
                    closeBurger={closeBurger} 
                    burger={burger}
                    category={setCategory}
                />
                {!loading && activeLink()}
            </div>
            <Footer/>
        </div>
    )
}