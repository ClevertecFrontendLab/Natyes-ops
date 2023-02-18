import { SpecBookItem } from '../spec-book-item';

import './spec-book.css'

export const SpecBook = (props) => {
    const {title} = props;
    
    return( 
        <div className="spec">
            <h5 className="title">{title}</h5>
            <ul className="spec-list">
                <SpecBookItem title='Издательство' value={props.publish}/>
                <SpecBookItem title='Жанр' value={props.categories[0]}/>
                <SpecBookItem title='Год издания' value={props.issueYear}/>
                <SpecBookItem title='Вес' value={props.weight}/>
                <SpecBookItem title='Страниц' value={props.pages}/>
                <SpecBookItem title='ISBN' value={props.ISBN}/>
                <SpecBookItem title='Переплёт' value={props.binding}/>
                <SpecBookItem title='Изготовитель' value={props.producer}/>
                <SpecBookItem title='Формат' value={props.format}/>
            </ul>
        </div>
     );
}