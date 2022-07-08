import React from 'react'
import classes from './FilterOption.module.css'

const FilterOptions = ({item, optionClick}) => {
  return (
    <li className={classes['filter-option']}>
        <p onClick={(e) => optionClick(e)}>{item}</p>
    </li>
  )
}

export default FilterOptions