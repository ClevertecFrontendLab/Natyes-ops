import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BookList } from '../book-list';
import { ContractPage } from '../contract';
import { Footer } from '../footer';
import { Header } from '../header';
import { MenuList } from '../menu';
import { TermsPage } from '../terms';

import { booksData } from './data'

import './app.css';

export const App = () => {
    const [books] = useState(booksData);
    const root = useLocation();
    const activeLink = () => root.pathname ===  '/' ? <BookList books={books}/> : root.pathname ===  '/terms' ? <TermsPage/> : root.pathname ===  '/contract' ? <ContractPage/> : <BookList books={books}/>;

    const [burger, setBurger] = useState(false);
    const toggleBurger = () => burger ? 'show' : 'hide';
    const clickBurger = () => setBurger(!burger);
    const closeBurger = () => setBurger(false);

    // burger ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

    return(
        <div className='container'>
            <Header onClick={clickBurger} active={toggleBurger()}/>
            <div className="main">
                <MenuList showMenu={toggleBurger()} clickBurger={clickBurger} closeBurger={closeBurger} burger={burger}/>
                {activeLink()}
            </div>
            <Footer/>
        </div>
    )
}