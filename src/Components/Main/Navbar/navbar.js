import React from 'react'
import "./navbar.css"

function Navbar() {
    return (
        <div className="Navbar">
            <h3 className="logo">LOGO</h3>
            <ul className="the-lists">
                <li className="list" >Home</li>
                <li className="list" >Travel</li>
                <li className="list" >Adventure</li>
                <li className="list" >Hotels</li>
            </ul>
        </div>
    )
}

export default Navbar
