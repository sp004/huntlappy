import React from 'react'
import Navbar from './Navbar'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
        <div className={classes['header-text']}>
          <h1>Search. Order. Receieve.</h1>
          <p>This is the most easiest way to find your favourite laptop and get it delievered to your doorstep</p>
        </div>
    </div>
  )
}

export default Header