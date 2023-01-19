import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="header__links">
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/signup">Sign up</Link></li>

                    <li><Link to="/login">Log In</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;