import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => (
    <>
        <div>Страница не найдена!</div>
        <Link to='/'>Перейти на главную страницу</Link>
    </>
);

export default NotFound;
