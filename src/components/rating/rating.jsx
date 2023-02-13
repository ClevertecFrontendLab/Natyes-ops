import { useState } from 'react'

import Star from './star.svg'
import OutStar from './star-outline.svg'

import './rating.css'



export const Rating = (props) => {
    const [rating, setRating] = useState(props.rating)

    const r = rating ? rating : 'ещё нет оценок';
    const cls = rating ? 'rating-num h5' : 'rating-num body-s';
    
    return(
        <div className="rating">
            {[...Array(5)].map((star, i) => {
                const value = i + 1;

                return(
                    <label className='rating-item' htmlFor='rating' key={value}>
                        <input 
                            type='radio' 
                            name='rating' 
                            value={value}/>
                        {value <= rating ? <img src={Star} alt="star"  /> : <img className="star" src={OutStar} alt="star" />}
                    </label>
                )
            })}
            {props.book ? <label className={cls}>{r}</label> : null}
        </div>
    )
}

    