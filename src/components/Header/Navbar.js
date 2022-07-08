import React from 'react'
import classes from './Navbar.module.css'
import logo from '../../assets/laptopLogo.png'
import {Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
        {/* logo */}
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        {/* cart  */}
        {/* <div className={classes.cart}>
            <p>Cart</p>
        </div> */}
    </nav>
  )
}

export default Navbar