import React from 'react';
import "./Footer.scss";
import Logo from "../assets/little-lemon-logo.png";

export const Footer = () => {
    return (
        <footer>
            <section className="container">
                <div className="row">
                    <div className="col-3">    
                        <img src={Logo} alt="Restaurant" />
                    </div>
                    <div className="col-3">
                        <h2>Navigation</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Menu</li>
                            <li>Reservations</li>
                            <li>Order Online</li>
                            <li>Login</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h2>Contact</h2>
                        <ul>
                            <li>Phone</li>
                            <li>Email</li>
                            <li>Address</li>
                        </ul>
                    </div>
                    <div className="col-3">
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