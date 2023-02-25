import { Link } from 'react-router-dom';

import './crumbs.css';

export const Crumbs = (props) => (
    <div className="crumbs black5 body-s">
        <div className="container">
            <Link to={`/books/${props.path}`} data-test-id='breadcrumbs-link' state={props.path !== '/books/all' && 'book'}>{props.category}</Link> / <span data-test-id='book-name'>{props.link}</span>
        </div>
    </div>
)