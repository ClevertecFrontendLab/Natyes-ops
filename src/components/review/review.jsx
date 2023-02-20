import { months } from '../../redux/types';
import { Rating } from '../rating';

import noneUser from './rev-user.png'

import './review.css';

export const Review = (props) => {
    const { text, user, rating, createdAt } = props;
    const date = new Date(Date.parse(createdAt));
    const createDate = `${date.getDay()} ${months[date.getMonth()]} ${date.getFullYear()}`

    return ( 
        <div className="review">
            <div className="review-t">
                <img src={user.avatarUrl ? user.avatarUrl : noneUser} alt='user' />
                <div className="name body-l">{`${user.firstName} ${user.lastName}`}</div>
                <div className="date body-l">{createDate}</div>
            </div>
            <Rating rating={rating}/>
            {
                text ? <div className="review-b body-l">{text}</div> : null
            }
        </div>
    );
}