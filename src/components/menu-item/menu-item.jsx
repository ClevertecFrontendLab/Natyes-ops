import { NavLink, useLocation } from 'react-router-dom';

import './menu-item.css'

export const MenuItem = ({...props}) => {
    const root = useLocation();
    const activeLink = () => root.pathname ===  '/' ? 'active': '';
    const { item, onClick, main } = props;
    const mWidth = 992;
    const cWidth = document.body.clientWidth;
    const checkMenuFirst = () => cWidth > mWidth ? 'navigation-books' : 'burger-books';
    
    const checkBurger = () => cWidth < mWidth ? onClick : null;

    return(<li className='menu-list__item body-l'>
    {
        main === 'main' ?
        <NavLink to="/books/all" className={`title ${activeLink()}`} data-test-id={checkMenuFirst()} onClick={checkBurger()}><span className="title">Все книги</span></NavLink>
        :
        <NavLink to={`/books/${item.path}`} className='title' onClick={checkBurger()}><span className="title">{item.name} </span><span className="count body-s black40">{item.id}</span></NavLink>
    } 
</li> 
)
}



