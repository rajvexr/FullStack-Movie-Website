import React from 'react'
import { Link } from "react-router-dom";
import './style/Navbar.css';

export default function Navbar() {
  return ( 
    <div className='sum'>
        <div className='logo'>
            RS-MOVIES
        </div>
        <nav className='navbar'>
            <ul className='ul'>
                <li id="liNav">
                    <Link to="/">Home</Link>
                </li>
                <li id="liNav">
                    <Link to="/film">Film</Link>
                </li>
                <li id="liNav">
                    <Link to="/category">Category</Link>
                </li>
                <li id="liNav">
                    <Link to="/actor">Actor</Link>
                </li>
            </ul>
        </nav>
    </div>

  )
}
