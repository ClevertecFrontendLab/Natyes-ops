import load from './loader.png'

import './loader.css'

export const Loader = () => (
    <div className='modal-load' data-test-id ='loader'>
        <img className='loader' src={load} alt="loader" />
    </div>
)