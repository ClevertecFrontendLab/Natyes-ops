import { Button } from '../button';
import { Rating } from '../rating';

import './book.css';

export const Book = (props) => (
    <div className="book white" data-test-id='card'>
        <div className={props.book.img === ''? 'book-i book-no' : 'book-i'}>
            {
                props.book.img === '' ? '' : <img src={props.book.img} alt={props.book.title} className="book-img" />
            }
            
        </div>
        <div className="book-info">
            <div className="rating body-s black40">{props.book.rating === '' ? 'ещё нет оценок' : <Rating rating={props.book.rating} key={props.book.id}/>}</div>
            {
                props.view === 'grid' ? 
                <div className="book-title subtitle-s">{props.book.title}</div> :
                <div className="book-title h4">{props.book.title}</div>
            }
            {
                props.view === 'grid' ? 
                <div className="book-author body-s">{props.book.author}, <span className="book-year">{props.book.year}</span></div> :
                <div className="book-author body-l">{props.book.author}, <span className="book-year">{props.book.year}</span></div>
            }
           
           <Button view={props.view} {...props}/>
        </div>
    </div>
)