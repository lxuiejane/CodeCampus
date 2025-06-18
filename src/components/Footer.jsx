import { Link, Outlet } from 'react-router-dom'
import '../styles/Navigation.css';

const Footer = () => {
    return (
        <footer className="footer__bar">
            <p className='footer__text'>© Copyright CodeCapmus</p>
            <ul>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;