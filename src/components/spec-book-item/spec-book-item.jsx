import './spec-book-item.css';

export const SpecBookItem = (props) => ( 
    <li className="spec-list__item">
        <div className="spec-list__item-title subtitle-l">{props.title}</div>
        <div className="spec-list__item-value body-l">{props.value}</div>
    </li>
)