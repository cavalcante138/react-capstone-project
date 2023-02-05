import React from 'react';
import "./Footer.scss";
import Logo from "../assets/little-lemon-logo.png";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
            <section className="container">
                <div className="row">
                    <div className="col-12 col-lg-3"> 
                        <div className="logo-container-footer">
                          <Link to="/">
                        <img src={Logo} alt="Logo Little Lemon" />
                        </Link>
                        </div>   
                    </div>
                    <div className="col-12 col-lg-3">
                        <h2>Navigation</h2>
                        <ul>
                            <li><Link
                                to={"/"}>Home
                                </Link>
                                </li>
                            <li>About</li>
                            <li>Menu</li>
                            <li><Link
                                to={"/booking"}
                                >Reservations</Link></li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h2>Contact</h2>
                        <ul>
                            <li>Phone</li>
                            <li>Email</li>
                            <li>Address</li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-3">
                        <h2>Social Media Links</h2>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                        </ul>               
                    </div>
                </div>
            </section>
        </footer>
    );
}