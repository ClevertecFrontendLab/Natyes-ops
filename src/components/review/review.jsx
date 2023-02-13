import { Rating } from "../rating";

import './review.css';

export const Review = (props) => {
    const { img, name, date, rating, body} = props;
    
    return ( 
        <div className="review">
            <div className="review-t">
                <img src={img} alt='user' />
                <div className="name body-l">{name}</div>
                <div className="date body-l">{date}</div>
            </div>
            <Rating rating={rating}/>
            {
                body ? <div className="review-b body-l">{body}</div> : null
            }
            
        </div>
    );
}