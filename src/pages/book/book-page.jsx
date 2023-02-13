import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BookInfo } from '../../components/book-info';
import { Crumbs } from '../../components/crumbs';
import { Header } from '../../components/header';
import { MenuList } from '../../components/menu';

import './book-page.css';

export const BookPage = () => {
    const {state} = useLocation();

    const [burger, setBurger] = useState(false);
    const toggleBurger = () => burger ? 'show' : 'hide';
    const clickBurger = () => setBurger(!burger);
    const closeBurger = () => setBurger(false);

    const mWidth = 992;
    const cWidth = document.body.clientWidth;

    return(
    <div className="book-page">
        <div className="container">
            <Header onClick={clickBurger} active={toggleBurger()}/>
        </div>
        <Crumbs link={state.propsBook.title} category={state.propsBook.categoryRu}/>
        <main className="container book-main">
            {
                mWidth > cWidth ? <MenuList showMenu={toggleBurger()} closeBurger={closeBurger} burger={burger}/> : ''
            }
            <BookInfo date={state}/>
        </main>
    </div>

);
}
 