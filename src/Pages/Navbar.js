import React from 'react'
import { NavLink } from "react-router-dom";
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
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li id="liNav">
                    <NavLink to="/search" >Search</NavLink>
                </li>
                <li id="liNav">
                    <NavLink to="/film" >Film</NavLink>
                </li>
                <li id="liNav">
                    <NavLink to="/category" >Category</NavLink>
                </li>
                <li id="liNav">
                    <NavLink to="/actor" >Actor</NavLink>
                </li>
            </ul>
        </nav>
    </div>

  )
}
