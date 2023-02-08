import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../services/fb_commands"

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const fetchCustomers = async () => {
    await getDocs(collection(db, "customers"))
        .then((querySnapshot)=>{              
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            setCustomers(newData);                
            console.log(customers, newData);
        })
  }
  useEffect(()=>{
    fetchCustomers();
  }, [])
  
  return (
    <ul>
      {customers.map((customer) => (
        <li key={customer.id}>{customer.name}</li>
      ))}
    </ul>
  );
};

export default CustomerList;
