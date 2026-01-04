import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
const API = import.meta.env.VITE_BACKEND_URL;
const ContactList = () => {

  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const res = await axios.get(`${API}/api/contacts`)
      // console.log(res.data);
      setContacts(res.data.data);
    } catch (error) {
      // console.log(error);
    } 
  }

  useEffect(()=>{
    getContacts();
  },[])

  const handleDelete = async (id) => {

    setContacts(prev => prev.filter(c => c._id !== id));

    try {
      const res = await axios.delete(`${API}/api/contacts/${id}`);
      if (res.data.success) {
        toast.success(res.data.message, { autoClose: 1500 });
      }
    } catch (error) {
      toast.error("Failed to delete contact");
    }
  };




  return (
    <div className='mt-10 mx-2 sm:mx-10 flex flex-wrap'>
      {contacts.length === 0 && (
        <p>No contacts found</p>
      )}

      { contacts.map((contact)=>(

        <div key={contact._id} className='border-2 border-gray-300 bg-slate-200 p-5 w-[350px] m-4'>
            <h1 className='font-medium mb-1'>Name : {contact.name} </h1>
            <h2 className='mb-1'>Email: {contact.email} </h2>
            <p className='mb-1'>phone: {contact.phone} </p>
            <p>Message : {contact.message} </p>
            <button onClick={()=> handleDelete(contact._id)} type='button' className='mt-2 bg-orange-600  py-2 px-4 text-white rounded-xl'>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default ContactList