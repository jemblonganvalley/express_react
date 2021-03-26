import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h3 className="brand">hello</h3>
            <ul className="menu">
                <li className="menu_item">
                    <Link to='/'>home</Link>
                </li>
                <li className="menu_item">
                    <Link to='/about'>about</Link>
                </li>
                <li className="menu_item">
                    <Link to='/contact'>contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
