import { useLocation } from 'react-router-dom';

import { BookRating } from '../book-rating';
import { ButtonBook } from '../button';
import { Footer } from '../footer';
import { Reviews } from '../reviews';
import { SliderBook } from '../slider-book';
import { SpecBook } from '../spec-book';

import './book-info.css';

export const BookInfo = () => {
    const {state} = useLocation();
    const imgs = state.propsBook.imgBook;

    return(
        <div>
            <div className="book-page__info">
                
            {
                state.propsBook.img === '' ? <div className='book-page__img book-i book-no' data-test-id='slide-big'/> : <SliderBook imgs={imgs}/>
            }     
                <h3 className="book-page__title">{state.propsBook.title}</h3>
                <h5 className="book-page__author black40">{state.propsBook.author}, {state.propsBook.year}</h5>
                <ButtonBook  {...state}/> 
                <div className="book-page__text body-l">
                    <h5 className="about">О книге</h5>
                    {state.propsBook.descr.map(item => <p className='about-p'>{item}</p>)}
                </div>
            </div>
            <BookRating {...state} title='Рейтинг'/>
            <SpecBook {...state} title='Подробная информация'/>
            <Reviews {...state} title='Отзывы' />
            <Footer/>
        </div>

    )
}