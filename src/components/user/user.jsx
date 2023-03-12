import { useState } from 'react';

import { Exit } from './exit';
import user from './user.png';

import './user.css';

export const User = () => {
    const [open, setOpen] = useState(false);
    const mWidth = 992;
    const cWidth = document.body.clientWidth;

    return(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className="user" onClick={() => setOpen(!open)}>
        <div className="user-name subtitle-s">
            Привет, Иван!
        </div>
        <img src={user} alt='user' className='user-ph'/>
        {open && cWidth > mWidth ? <Exit/> : null}
    </div>
)}