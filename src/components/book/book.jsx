import { HOST } from '../../services/api';
import { Button } from '../button';
import { Rating } from '../rating';

import './book.css';

export const Book = ({...props}) => {
    const {issueYear, rating, title, authors, image, id} = props.book;

    const url = image === null ? '' : image.url === '' ? '' : HOST+image.url;

    return(
    <div className="book white" data-test-id='card'>
        <div className='book-i book-no'>
            {
                url ? <img src={url} alt={title} className="book-img" />  : ''
            }
        </div>
        <div className="book-info">
            <div className="rating body-s black40">{rating === null ? 'ещё нет оценок' : <Rating rating={rating} key={id}/>}</div>
            {
                props.view === 'grid' ? 
                <div className="book-title subtitle-s">{title.length >= 53 ? `${title.substring(0,53)}...` : title}</div> :
                <div className="book-title h4">{title.length >= 53 ? `${title.substring(0,53)}...` : title}</div>
            }
            {
                props.view === 'grid' ? 
                <div className="book-author body-s">{authors.join(', ')}, <span className="book-year">{issueYear}</span></div> :
                <div className="book-author body-l">{authors.join(', ')}, <span className="book-year">{issueYear}</span></div>
            }
        
        <Button view={props.view} {...props}/>
        </div>
    </div>
    )
}