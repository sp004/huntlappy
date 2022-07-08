import { collection } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { laptopContext } from "../../context/laptop-context";
// import db from "../../firebase/config";
import Laptop from "./Laptop";
import classes from "./Laptops.module.css";

const Laptops = () => {
  const {laptops, filteredLaptops, brandOption} = useContext(laptopContext)

  console.log("laptops", laptops)
  console.log("Flaptops", filteredLaptops)

  let lappies = []

  if(brandOption !== 'All'){
    lappies = [...filteredLaptops]
  }else{
    lappies = [...laptops]
  }

  console.log("lappies",lappies)

  return (
    <div className={classes.laptops}>
      {lappies && lappies.map((item) => (
        <Laptop
          key={item.id}
          img={item.imgURL}
          brand={item.brand}
          series={item.series}
          cpuType={item.cpuType}
          inches = {item.inches}
          ram = {item.ram}
          hdd = {item.hdd}
          model = {item.model}
          price = {item.price}
          prevPrice = {item.prevPrice}
          usage = {item.usage}
        />
      ))}
    </div>
  );
};

export default Laptops;
