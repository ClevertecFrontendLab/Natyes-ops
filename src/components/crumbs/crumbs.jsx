import './crumbs.css';

export const Crumbs = (props) => (
    <div className="crumbs black5 body-s">
        <div className="container">
            {props.category} / {props.link}
        </div>
    </div>
)
