import { useState } from 'react';

import exit from './exit.svg'
import sicon from './Search.svg';
import saicon from './searchActive.svg';
import ficon from './Sort-ascending.svg';

import './filter.css';

export const Filter = (props) => {
    const [search, setSearch] = useState(false);
    const { onChange, sort, sortChange } = props;
    const toggleSearch = () => setSearch(!search);
    const activeSearch = () => search ? 'active' : '';
    const sortClass = sort ? 'active' : '';

    return(
    <form action="" className="filter">
        <button type='button' className={`search ${activeSearch()}`} data-test-id='button-search-open' onClick={toggleSearch}>
            <img className='search__icon' src={search ? saicon : sicon} alt='search'/>
        </button>
        <div className={`input-search ${activeSearch()}`} >
            <input 
                className="filter-search body-s" 
                type="text" 
                placeholder="Поиск книги или автора…" 
                data-test-id='input-search'
                onChange={e => onChange(e.target.value)}
            />
            <img className='filter-search__icon' src={search ? saicon : sicon} alt='search'/>
            <button type='button' className='search-exit' data-test-id='button-search-close' onClick={toggleSearch}>
                <img src={exit} alt='exit'/>
            </button>
        </div>
        <button type='button' className="filter-select input" onClick={sortChange} data-test-id='sort-rating-button'>
            <div type='button' className="black40 body-s" name="rating" id="rating" >
                По рейтингу
            </div>
            <img className={`filter-select__icon ${sortClass}`}src={ficon} alt='search'/>
        </button>
        <input className={props.view === 'grid' ? 'btn-f btn-grid active' : 'btn-f btn-grid'} type="button" onClick={() => props.onClick('grid')} data-test-id='button-menu-view-window'/>
        <input className={props.view === 'line' ? 'btn-f btn-line active' : 'btn-f btn-line'} type="button" onClick={() => props.onClick('line')} data-test-id='button-menu-view-list'/>
    </form>
)
}


