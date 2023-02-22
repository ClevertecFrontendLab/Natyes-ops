import { HOST } from '../../services/api';
import { Button } from '../button';
import { Rating } from '../rating';

import './book.css';

export const Book = ({...props}) => {
    const { search } = props;
    const { issueYear, rating, title, authors, image, id } = props.book;

    const url = image === null ? '' : image.url === '' ? '' : HOST+image.url;
    // title.substring(0,index)
    // title.substring(index + input.length)
    const input = search && search.toLowerCase();
    const bookTitle = title.toLowerCase();
    const index = bookTitle.indexOf(input); 

    const markTitle = index >= 0 && input ? (<span style={{color: '#FF5253'}} data-test-id='highlight-matches'>{title.substring(index, index + input.length)}</span>) : '';

    return(
    <div className="book white" data-test-id='card'>
        <div className='book-i book-no'>
            { url ? <img src={url} alt={title} className="book-img" />  : ''}
        </div>
        <div className="book-info">
            <div className="rating body-s black40">{rating === null ? 'ещё нет оценок' : <Rating rating={rating} key={id}/>}</div>
            {
                props.view === 'grid' ? 
                <div className="book-title subtitle-s">{title.substring(0,index)}{markTitle}{title.substring(index + input.length, 53)}...</div> :
                <div className="book-title h4">{title.substring(0,index)}{markTitle}{title.substring(index + input.length)}</div>
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