import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { downError } from '../../redux/app-slice';
import { getCategory } from '../../services/api';
import  { MenuItem }  from '../menu-item';

import arrow from './arrow.png'
import arrowa from './arrowa.png'

import './menu.css';

export const MenuList = ({...props}) => {
    const items = useSelector(state => state.library.category)
    const loading = useSelector(state => state.app.loading)
    const dispatch = useDispatch()
    const close = useCallback(() => {
        dispatch(downError())
    },[dispatch])

    const getCategoryes = useCallback(() => {
        dispatch(getCategory())
    },[dispatch])

    useEffect(() => {
        if (!items.length) {
            getCategoryes()
        }
    }, [getCategoryes, items]);

    const [menu, setMenu] = useState(true);
    const root = useLocation();
    const list = useRef(null)

    const { showMenu, clickBurger, closeBurger, burger } = props;
    

    const activeLink = () => root.pathname.match('/books/all') ? 'active' : root.pathname.match(/books/gi) || root.pathname === '/'  ? 'active': '';

    const clickMenu = () => (setMenu(!menu));
    const clickPage = () => (setMenu(false));
    const toggleMenu = () => menu ? 'show' : 'hide';
    const mWidth = 992;
    const cWidth = document.body.clientWidth;
    const checkMenu = () =>  cWidth < mWidth && showMenu === 'show' ? 'show black5': 'hide';
    const checkTitle = () => cWidth > mWidth? 'navigation-showcase' : 'burger-showcase';
    const checkTerms = () => cWidth > mWidth ? 'navigation-terms' : 'burger-terms';
    const checkContract = () => cWidth > mWidth ? 'navigation-contract' : 'burger-contract';

    const checkClick = (ref) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (burger) return null;

            const handleClick = (e) => {
                if (ref.current && !ref.current.contains(e.target) ) {
                    if (!e.target.parentElement.matches('.menu-mob') || e.target.matches('.menu-mob')) {
                        closeBurger();
                    }
                }
            }

            document.addEventListener('click', handleClick);

            return () => document.removeEventListener('click', handleClick);
        }, [ref])
    }

    checkClick(list)

    return(
        <nav ref={list} className={`menu ${checkMenu()}`} data-test-id='burger-navigation'>
            <div className="menu-nav">
            <NavLink to='/books/all' className={`menu-link ${activeLink()} menu-link__select`} onClick={() => clickMenu()} data-test-id={checkTitle()}>
                <h5 className="link">Витрина книг</h5>
                <div className={`menu-arrow ${toggleMenu()}`} >
                    {
                        menu || activeLink() ? <img src={arrowa} alt=''/> : <img src={arrow} alt=''/>
                    }
                </div>
            </NavLink>
            <ul className={`menu-list ${toggleMenu()}`}>
                {!loading &&
                    <MenuItem main="main" key={24} menu={menu} onClick={clickBurger}/>
                }
                {!loading && items.map(item => 
                    <MenuItem item={item} key={item.id} menu={menu} onClick={clickBurger}/>
                )}
            </ul>
            <NavLink className='menu-link' to="/terms" onClick={() => {clickPage(); clickBurger(); close()}} data-test-id={checkTerms()}><h5 className='link link-oth'>Правила пользования</h5></NavLink>
            <NavLink className='menu-link' to="/contract" onClick={() => {clickPage(); clickBurger(); close()}} data-test-id={checkContract()}><h5 className='link link-oth'>Договор оферты</h5></NavLink>
            </div>
            {
                showMenu === 'show' && cWidth < mWidth ? 
                <div className="menu-user">
                    <NavLink className='menu-link' to="/account"><h5 className='link link-oth'>Профиль</h5></NavLink>
                    <NavLink className='menu-link' to="/exit"><h5 className='link link-oth'>Выход</h5></NavLink>
                </div>
                : ''
            }
        </nav>
    )
}


