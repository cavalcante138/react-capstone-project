import Logo from "../assets/Logo.svg";
import "./Nav.scss"

export const Nav = () => {
    return (
        <nav className="container">
            <div className="row">
                <div className="col-3">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="col-9">
                    <div className="nav-menu-container">
                    <ul className="nav-menu">
                        <li>
                            <a href="#">Home</a></li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Menu</a>
                        </li>
                        <li>
                            <a href="#">Reservations</a>
                        </li>
                        <li>
                            <a href="#">Order Online</a>
                        </li>
                        <li>
                            <a href="#">Login</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}