import { createContext, useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase/config";

export const laptopContext = createContext()

const LaptopContextProvider = (props) => {
    const [laptops, setLaptops] = useState([]);
    // const [brand, setBrand] = useState([])
    const [filteredLaptops, setFilteredLaptops] = useState([])
    const [brandOption, setBrandOption] = useState('All')

    // collection ref
    const collRef = collection(db, 'laptops')

    useEffect(() => {
      const unsub = onSnapshot(collRef, (snapshot) => {
        setLaptops(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
      })

      return unsub;
    }, []);

    return(
        <laptopContext.Provider value={{laptops, setFilteredLaptops, filteredLaptops, brandOption, setBrandOption}}>
            {props.children}
        </laptopContext.Provider>
    )
}

export default LaptopContextProvider