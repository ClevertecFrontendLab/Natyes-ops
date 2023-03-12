import { Link } from 'react-router-dom';

import { User } from '../user';

import logo from './logo.svg';

import './header.css';

export const Header = (props) => {
    const {active, onClick} = props;

    return(
        <header className='header'>
            <div className="container">
                <Link to="/" className='logo-link'><img className='logo' src={logo} alt='Cleverland' /></Link>
                <button type='button' className={`menu-mob ${active}`} onClick={onClick} data-test-id='button-burger'>
                    <span/><span/><span/>
                </button>
                <h3>Библиотека</h3>
                <User/>
            </div>
        </header>
    )
}
