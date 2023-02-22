import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import './menu-item.css'

export const MenuItem = ({...props}) => {
    const books = useSelector(state => state.library.books)
    const root = useLocation();
    const activeLink = () => root.pathname ===  '/' ? 'active': '';

    const { item, onClick, main, category } = props;

    const mWidth = 992;
    const cWidth = document.body.clientWidth;
    const checkMenuFirst = () => cWidth > mWidth ? 'navigation-books' : 'burger-books';
    const checkMenuItem = () => cWidth > mWidth ? `navigation-${item.path}` : `burger-${item.path}`;
    const checkBurger = () => cWidth < mWidth ? onClick : null;

    const count = useCallback(() => 
        books.filter(i => item && i.categories.includes(item.name)).length
    , [books, item]);

    useEffect(() => {
        if (item) {
            count()
        } 
    },[count, item])

    return(<li className='menu-list__item body-l'>
    {
        main === 'main' ?
        <NavLink to="/books/all" className={`title ${activeLink()}`} data-test-id={checkMenuFirst()} onClick={() => {checkBurger(); category('Все книги')}}><span className="title" >Все книги</span></NavLink>
        :
        <NavLink to={`/books/${item.path}`} className='title' data-test-id={checkMenuItem()} onClick={() => {checkBurger(); category(item.name)}}><span className="title">{item.name} </span><span className="count body-s black40">{count()}</span></NavLink>
    } 
</li> 
)
}



