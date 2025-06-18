import { Link, Outlet } from 'react-router-dom'
import '../styles/Navigation.css';

const Nav = () => {
    return (
        <>
            <nav className="navigation__bar">
                <ul>
                    <div>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </div>
                    <li><Link to='/help'>Help</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;