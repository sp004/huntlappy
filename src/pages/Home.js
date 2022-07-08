import React from 'react'
import Filter from '../components/Filters/Filter'
import Header from '../components/Header/Header'
import Navbar from '../components/Header/Navbar'
import Laptops from '../components/Laptop/Laptops'

const Home = () => {
  return (
    <>
        {/* <Navbar /> */}
        <Header />
        <Filter />
        <Laptops />
    </>
  )
}

export default Home