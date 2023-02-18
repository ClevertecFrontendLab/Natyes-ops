import img from './error.svg'
import exit from './exitmodal.svg'

import './error.css'

export const Error = () => (
    <div className="error" data-test-id ='error'>
        <img src={img} alt="error" className="error-img" />
        <span className="error-text subtitle-l">Что-то пошло не так. Обновите страницу через некоторое время.</span>
        <img src={exit} alt="exit" className="error-exit" />
    </div>
)