import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { downLoader } from '../../redux/app-slice';
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
    const [burger, setBurger] = useState(false);
    const [category, setCategory] = useState('Все книги');

    const root = useLocation();
    const path = root.pathname;
    const loading = useSelector(state => state.app.loading);
    const error = useSelector(state => state.app.error);
    const activeLink = () => path ===  '/' ? <BookList currentCategory={category}/> : path ===  '/terms' ? <TermsPage/> : path ===  '/contract' ? <ContractPage/> : <BookList currentCategory={category}/>;

    const dispatch = useDispatch()

    const toggleBurger = () => burger ? 'show' : 'hide';
    const clickBurger = () => setBurger(!burger);
    const closeBurger = () => setBurger(false);

    useEffect(() => {
        if (path === '/terms' || path ===  '/contract') {
            dispatch(downLoader())
        }
    }, [path, dispatch])
    // burger ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

    return(
        <div className='container'>
            <Header onClick={clickBurger} active={toggleBurger()}/>
            <div className="main">
                {error && <Error/>}
                {(loading && !error) && <Loader/>}
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