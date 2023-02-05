import { useState } from "react";
import Logo from "../assets/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import "./Nav.scss"
import { Link } from "react-router-dom";

export const Nav = () => {

    const [menuMobileOpen, setMenuMobileOpen] = useState(false);

    return (
        <nav className="container">
            <div className="row">
                <div className="col-6 col-lg-3">
                    <img src={Logo} alt="Logo little lemon" className="logo-topo" />
                </div>
                <div className="col-6 col-lg-9">
                    <div className="menu-mobile">
                        <button className="menu-mobile-button" 
                        aria-label="On Click"
                        onClick={() =>
                        {
                            document.body.style.overflow = 'hidden';
                            document.documentElement.style.overflow = 'hidden';
                            setMenuMobileOpen(!menuMobileOpen)
                        } 
                            }>
                            <GiHamburgerMenu
                            size={26}
                            />
                        </button>
                    </div>
                        <div className={`menu-mobile__links ${menuMobileOpen ? "menu-mobile__links--open" : ""}`}>
                            <GrFormClose onClick={() => 
                                {
                                    document.body.style.overflowY = 'unset';
                                    document.body.style.overflowX = 'hidden';
                                    document.documentElement.style.overflowY = 'unset';
                                    document.documentElement.style.overflowX = 'hidden';
                                    setMenuMobileOpen(!menuMobileOpen);
                                }
                                }
                                size={60}
                                color="#fff"
                                />
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

                    <div className="nav-menu-container menu-desktop">
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
                            <Link
                            to={"/booking"}
                            data-testid="booking-link"
                            >Reservations</Link>
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