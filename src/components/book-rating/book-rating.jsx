import { Rating } from '../rating';

import './book-rating.css';

export const BookRating = (props) => {
    const {title} = props;

    return ( 
        <div className="rating-box">
            <h5 className="title">{title}</h5>
            <Rating book={true} rating={props.propsBook.rating}/>
        </div>
    );
}