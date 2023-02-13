import fb from './Facebook.svg';
import inst from './Instagram.svg';
import ld from './Linkedin.svg';
import vk from './Vk.svg';

import './footer.css';

export const Footer = () => (
    <footer className="footer">
        <div className="footer-t body-l">© 2020-2023 Cleverland. Все права защищены.</div>
        <ul className="soc">
            <li>
                <a href="#!"><img src={fb} alt="facebook" /></a>
            </li>
            <li>
                <a href="#!"><img src={inst} alt="instagram" /></a>
            </li>
            <li>
                <a href="#!"><img src={ld} alt="linkedin" /></a>
            </li>
            <li>
                <a href="#!"><img src={vk} alt="vk" /></a>
            </li>
        </ul>
    </footer>
)