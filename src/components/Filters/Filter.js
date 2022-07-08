import { collection, getDocs, query, where } from "firebase/firestore";
import React, {useState, useContext, useEffect} from "react";
import {AiFillCaretDown} from 'react-icons/ai'
import { laptopContext } from "../../context/laptop-context";
import db from "../../firebase/config";
import classes from './Filter.module.css'
import FilterOptions from "./FilterOptions";

const Filter = () => {
    const {laptops, filteredLaptops, setFilteredLaptops, brandOption, setBrandOption} = useContext(laptopContext)
    const [showFilterOptions, setShowFilterOptions] = useState(false)
    const [brands, setBrands] = useState()

    useEffect(() => {
      setBrands(laptops.map((laptop) => laptop.brand))
    }, [laptops])

    const uniqueBrand = ['All', ...new Set(brands)]

    const onFilterHandler = () => {
        setShowFilterOptions((prev) => !prev)
    }

    const onOptionCLickHandler = (e) => {
      setBrandOption(e.target.textContent)
    }

    const collRef = collection(db, 'laptops')
    const q = query(collRef, where('brand', '==', brandOption))

    useEffect(() => {
      const getFilteredLaptops = async () => {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          setFilteredLaptops(filteredLaptops => [...filteredLaptops, doc.data()]);
        });
      }
      getFilteredLaptops()

      return setFilteredLaptops([])
    }, [brandOption]) 

    console.log(brandOption)

  return (
    <div className={classes.filters}>
        <ul className={classes["filter-detail"]}>
          <label htmlFor="">Filter by Brand</label>
            <li className={classes["filter-item"]} onClick={onFilterHandler}>
                {brandOption} <AiFillCaretDown />
                {showFilterOptions && (
                <ul className={classes["filter-options"]}>
                    {uniqueBrand.map((brand, i) => (
                        <FilterOptions key={i} item={brand} optionClick={onOptionCLickHandler} />
                    ))}
                </ul>
                )}
            </li>
        </ul>
    </div>
);
};

export default Filter;
