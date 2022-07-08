import React, { useState } from 'react'
import classes from './Details.module.css'

const Details = ({item}) => {
  const [quantity, setQuantity] = useState(1)
    console.log(item)
  return (
    <div className={classes.details}>
      <div className={classes['laptop-detail']}>
        <div className={classes.image}>
          <img src={item.imgURL} alt="image" />
        </div>
        <div className={classes.info}>
          <h3>{item.series} {item.inches} Laptop {item.cpuType} ({item.ram} GB RAM / {item.hdd} HDD / {item.gpuProcessor} / {item.graphicsMemory}GB Graphics Memory / {item.model}) </h3>

          <div className={classes.prices}>
            <p className='price'>₹{item.price}</p>
            <h6 className='prevprice'>₹{item.prevPrice}</h6>
          </div>

          <p style={{margin: '8px 0'}}>ASIN: {item.asin}</p>

          <label htmlFor="qty">Qty: </label>
          <input type="number" id='qty' value={quantity} min={1} max={item.quantity} onChange={(e) => setQuantity(e.target.value)} /> <br />

          <button className={classes.btn}>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Details