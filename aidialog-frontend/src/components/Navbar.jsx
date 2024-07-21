import React from 'react'
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <nav>
        <div className='nav-logo'>
            <a href="#"><img src="" alt="Logo"/>AI</a>
        </div>
        <div className='nav-items'>
         
                <a href="#"><li>Home</li></a>
                <a href = "#"><li>About</li></a>
                <a href="#"><li>Services</li></a>
                <a href="#"><li>Contact</li></a>
        </div>
    </nav>
  )
}

export default Navbar