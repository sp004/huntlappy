import React from 'react'

import classes from './Filters.module.css'

import Filter from './Filter'

const Filters = () => {
    const filterItems = ['Brand', 'Best For']

    // laptops.map((item) => {
    //     setFilters([...filters])
    // })

    // console.log("filters", laptops.map(item => item.brand))

  return (
    <div className={classes.filters}>
        <ul className={classes["filter-detail"]}>
            {/* {filterItems.map((item, i) => (
                <Filter key={i} item={item} />
            ))} */}
        </ul>
    </div>
  )
}

export default Filters