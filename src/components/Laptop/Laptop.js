import { Link } from 'react-router-dom'
import React from 'react'
import classes from './Laptop.module.css'

const Laptop = ({price, img, series, cpuType, inches, ram, hdd, model, prevPrice, usage}) => {
  return (
    <Link className={classes.laptop} to={`/laptop/${model}`}>
      <img src={img} alt="laptop" />
      <h4>{series} {cpuType} {inches} inches ({ram} RAM, {hdd} HDD)</h4>
      <p className='price'>₹{price}</p>
      <h6 className='prevprice'>₹{prevPrice}</h6>
      <div className={classes.usages}>
        <h5>Best For</h5> 
        {usage.map((item,i) => (
          <p className={classes.usage} key={i}>{item}</p>
        ))}
      </div>
    </Link>
  )
}

export default Laptop