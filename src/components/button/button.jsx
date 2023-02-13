import './button.css';

export const Button = (props) => {
    const { ibron, bron} = props.book;
    const clsG = ibron ? 'btn btn-book btn-s--mob btn-book--i' : bron === '' ? 'btn btn-book btn-s--mob' : 'btn btn-book btn-s--mob btn-book--bron black5';
    const clsL = ibron ? 'btn btn-book btn-s--mob btn-book--i' : bron === '' ? 'btn btn-book btn-s--mob ' : 'btn btn-book btn-s--mob btn-book--bron c-white';
    const checkView = props.view === 'grid' ? clsG : clsL;
    const title = ibron ? 'Забронирована' : bron === '' ? 'Забронировать' : `Занята до ${bron}`;

    return ( 
        <button className={checkView} type='button' disabled={bron} >
            {title}
        </button>
    );
}
export const ButtonBook = (props) => {
    const { ibron, bron} = props.propsBook;
    const cls = ibron ? 'btn btn-book  btn-book--i' : bron === '' ? 'btn btn-book' : 'btn btn-book  btn-book--bron black5';
    const title = ibron ? 'Забронирована' : bron === '' ? 'Забронировать' : `Занята до ${bron}`;

    return ( 
        <button className={cls} type='button' disabled={bron} >
            {title}
        </button>
    );
}