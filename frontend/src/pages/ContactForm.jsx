import React, { useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
const API = import.meta.env.VITE_BACKEND_URL;

const ContactForm = () => {

  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const isValid = name && phone;

  const handleSubmit = async(e) => {
    e.preventDefault();
    // console.log({name, email, message, phone});
    try {
      const response = await axios.post(`${API}/api/contacts`, {name, email, phone, message});
      
      if (response.data.success) {
      toast.success(response.data.message || "Contact added successfully");

      // clear form
      setname("");
      setEmail("");
      setPhone("");
      setMessage("");

      navigate("/list");
    } else {
      toast.error(response.data.message || "Failed to add contact");
    }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong")
    }
  }


  return (
    <div >
        <h1 className='text-center mt-14 text-2xl'>Contact Form</h1>
        <form onSubmit={handleSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto text-gray-800'>
            <label className='w-full pl-2 mt-4 cursor-pointer' htmlFor="name">Name</label>
            <input id='name' value={name} onChange={(e)=> setname( e.target.value)} type="text" placeholder='Enter a name' required className='box' />

            <label className='w-full pl-2 cursor-pointer' htmlFor="email">Email</label>
            <input id='email' value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder='abc@gmail.com'  className='box' />

            <label className='w-full pl-2 cursor-pointer' htmlFor="phone">Phone No.</label>
            <input className='box' value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder='9876543210' id='phone' maxLength={10}  required />

            <label className='w-full pl-2 cursor-pointer' htmlFor="msg">Message</label>
            <textarea value={message} maxLength={99} onChange={(e)=>setMessage(e.target.value)} className='box' name="" id="msg" maxLength={350} ></textarea>
            
            <button disabled={!isValid} className={` font-md px-12 py-2 text-white ${isValid? "bg-orange-600" : "bg-gray-900"} `} type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default ContactForm