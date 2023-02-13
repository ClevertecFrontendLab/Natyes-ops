import { useState } from 'react';

import exit from './exit.svg'
import sicon from './Search.svg';
import ficon from './Sort-ascending.svg';

import './filter.css';

export const Filter = (props) => {
    const [search, setSearch] = useState(false);

    const toggleSearch = () => setSearch(!search);
    const activeSearch = () => search ? 'active' : '';

    return(
    <form action="" className="filter">
        <button type='button' className={`search ${activeSearch()}`} data-test-id='button-search-open' onClick={toggleSearch}>
            <img className='search__icon' src={sicon} alt='search'/>
        </button>
        <div className={`input-search ${activeSearch()}`} >
            <input className="filter-search body-s" type="text" placeholder="Поиск книги или автора..." data-test-id='input-search'/>
            <img className='filter-search__icon' src={sicon} alt='search'/>
            <button type='button' className='search-exit' data-test-id='button-search-close' onClick={toggleSearch}>
                <img  src={exit} alt='exit'/>
            </button>
        </div>
        <div className="input">
            <select className="filter-select black40 body-s" name="rating" id="rating">
                <option value="-">По рейтингу</option>
            </select>
            <img className='filter-select__icon' src={ficon} alt='search'/>
        </div>
        <input className={props.view === 'grid' ? 'btn-f btn-grid active' : 'btn-f btn-grid'} type="button" onClick={() => props.onClick('grid')} data-test-id='button-menu-view-window'/>
        <input className={props.view === 'line' ? 'btn-f btn-line active' : 'btn-f btn-line'} type="button" onClick={() => props.onClick('line')} data-test-id='button-menu-view-list'/>
    </form>
)
}


