import { useState } from 'react';

import { Review } from '../review';

import './reviews.css';

export const Reviews = (props) => {
    const {reviews} = props.propsBook;
    const cls = reviews.length ? 'title' : 'title reviews-no';
    const [review, setReview] = useState(true);

    
    const clickReview = () => (setReview(!review));
    const toggleReview = () => review ? 'show' : 'hide';

    return ( 
        <div className="reviews">
            <h5 className={cls}>
                {props.title} 
                <span className="count body-s">{reviews.length}</span>
                <button type='button' className={`review-arrow ${toggleReview()}`} onClick={clickReview} data-test-id='button-hide-reviews'>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.29289 0.292893C6.68342 -0.0976311 7.31658 -0.0976311 7.70711 0.292893L13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711C13.3166 8.09763 12.6834 8.09763 12.2929 7.70711L7 2.41421L1.70711 7.70711C1.31658 8.09763 0.683417 8.09763 0.292893 7.70711C-0.0976311 7.31658 -0.0976311 6.68342 0.292893 6.29289L6.29289 0.292893Z" fill="#363636"/>
                    </svg>
                </button>
            </h5>
            <div className={`reviews-list ${toggleReview()}`}>
                {reviews.map(el => <Review {...el} key={el.id}/>)}
            </div>
            <button className='btn btn-review btn-l' type='button' data-test-id='button-rating'>
                оценить книгу
            </button>
        </div>
    );
}
 