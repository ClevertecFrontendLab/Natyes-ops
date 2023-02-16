import './button.css';

export const Button = (props) => {
    const { booking, delivery } = props.book;
    const clsG = booking ? 'btn btn-book btn-s--mob btn-book--i' : delivery === null ? 'btn btn-book btn-s--mob' : 'btn btn-book btn-s--mob btn-book--bron black5';
    const clsL = booking ? 'btn btn-book btn-s--mob btn-book--i' : delivery === null ? 'btn btn-book btn-s--mob ' : 'btn btn-book btn-s--mob btn-book--bron c-white';
    const checkView = props.view === 'grid' ? clsG : clsL;
    const title = booking ? 'Забронирована' : delivery === null ? 'Забронировать' : `Занята до ${delivery}`;

    return ( 
        <button className={checkView} type='button' disabled={delivery} >
            {title}
        </button>
    );
}
export const ButtonBook = (props) => {
    const { booking, delivery} = props.propsBook;
    const cls = booking ? 'btn btn-book  btn-book--i' : delivery === null ? 'btn btn-book' : 'btn btn-book  btn-book--bron black5';
    const title = booking ? 'Забронирована' : delivery === null ? 'Забронировать' : `Занята до ${delivery.dateHandedTo}`;

    return ( 
        <button className={cls} type='button' disabled={delivery} >
            {title}
        </button>
    );
}