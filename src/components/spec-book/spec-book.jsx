import { SpecBookItem } from '../spec-book-item';

import './spec-book.css'

export const SpecBook = (props) => {
    const {title} = props;
    
    return( 
        <div className="spec">
            <h5 className="title">{title}</h5>
            <ul className="spec-list">
                <SpecBookItem title='Издательство' value={props.propsBook.publish}/>
                <SpecBookItem title='Жанр' value={props.propsBook.genre}/>
                <SpecBookItem title='Год издания' value={props.propsBook.year}/>
                <SpecBookItem title='Вес' value={props.propsBook.weight}/>
                <SpecBookItem title='Страниц' value={props.propsBook.pages}/>
                <SpecBookItem title='ISBN' value={props.propsBook.isbn}/>
                <SpecBookItem title='Переплёт' value={props.propsBook.binding}/>
                <SpecBookItem title='Изготовитель' value={props.propsBook.manufact}/>
                <SpecBookItem title='Формат' value={props.propsBook.format}/>
            </ul>
        </div>
     );
}