import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-container">
     <Link to="/home"><p>Home</p></Link>
     <Link to="/dashboard"><p>Dashboard</p></Link>
     <Link to="/about"><p>About</p></Link>
    </div>
  )
}

export default Navbar