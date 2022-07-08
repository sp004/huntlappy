import React, { useEffect, useState } from 'react'
import Details from '../components/Details/Details'
import { useParams } from 'react-router-dom'
import db from '../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const LaptopDetails = () => {
  const {model} = useParams()
  const [laptopDetails, setLaptopDetails] = useState([])
  
  const collRef = collection(db, 'laptops')

  useEffect(() => {
    const q = query(collRef, where('model', '==', model))
    const getLaptop = async () => {
    
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setLaptopDetails([doc.data()]);
      });
    }

    getLaptop()
  }, [])
  
console.log(laptopDetails)
    
    // onSnapshot(collRef, (doc) => {
    //   setLaptopDetails(doc.data())
    // })
    // getDoc(docRef).then(doc => {
    //   console.log(doc.data())
    // })

  
  return (
    <>
      {laptopDetails?.map(item => (
        <Details key={item.id} item={item} />
      ))}
    </>
  )
}

export default LaptopDetails