import { BookRating } from '../book-rating';
import { ButtonBook } from '../button';
import { Reviews } from '../reviews';
import { SliderBook } from '../slider-book';
import { SpecBook } from '../spec-book';

import './book-info.css';

export const BookInfo = (props) => {
    const { current } = props;
    const imgs = current.images;

    return(
        <div>
            <div className="book-page__info">
            {
                current.images === null ? <div className='book-page__img book-i book-no' data-test-id='slide-big'/> : <SliderBook imgs={imgs}/>
            }     
                <h3 className="book-page__title" data-test-id='book-title'>{current.title}</h3>
                <h5 className="book-page__author black40">{current.authors[0]}, {current.issueYear}</h5>
                <ButtonBook  {...current}/> 
                <div className="book-page__text body-l">
                    <h5 className="about">О книге</h5>
                    <p className='about-p'>{current.description}</p>
                </div>
            </div>
            <BookRating {...current} title='Рейтинг'/>
            <SpecBook {...current} title='Подробная информация'/>
            <Reviews {...current} title='Отзывы' />
        </div>)
}