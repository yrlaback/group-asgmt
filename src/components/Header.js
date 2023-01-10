import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="header__links">
                    <li><Link to="/">Home</Link></li>

                    <li>Sign up</li>

                    <li><Link to="/login">Log In</Link></li>

                    <li><Link to="/adventure">Adventure</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;