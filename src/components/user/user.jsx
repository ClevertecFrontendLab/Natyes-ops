import user from './user.png';

import './user.css';

export const User = () => (
    <div className="user">
        <div className="user-name subtitle-s">
            Привет, Иван!
        </div>
        <img src={user} alt='user' className='user-ph'/>
    </div>
)