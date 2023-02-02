import Logo from "../assets/Logo.svg";

export const Nav = () => {
    return (
        <nav>
            <img src={Logo} alt="logo" />
            <ul>
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
        </nav>
    );
}