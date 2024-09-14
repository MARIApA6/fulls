import React from 'react';
import Route from "react-router-dom";
import "./navbar.css";



const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Route to="/">Home</Route>
                </li>
                <li>
                    <Route to="/about">About</Route>
                </li>
                <li>
                    <Route to="/contact">Contact</Route>
                </li>
            </ul>
        </nav>
    );
};


/*const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='Links'>
                <Link to="/"> Shop</Link>
                <Link to="/">משהו נוסף ללינק </Link>
                NavBar
            </div>
        </div>
    )
}*/
/*function NavBar() {
    return (
        <nav className="NavBar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
        </nav>
    );
}
*/

export default Navbar;
