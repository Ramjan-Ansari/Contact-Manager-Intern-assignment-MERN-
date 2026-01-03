import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-[100vh] -mt-8 flex justify-center items-center'>
        <div className='w-[80%] flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-4xl mb-1'>Welcome to <span className='text-orange-600'>Contact Manager</span></h1>
        <p className='text-xl sm:2xl'>
          This app allows you to add and manage contacts Form.
        </p>
        <div className='bg-orange-600 px-4 py-2 text-white mt-2 w-20 rounded-md flex justify-center items-center font-sm' role='button'>
              <Link to={"/contact"}> create </Link>
            </div>  
        </div>
    </div>
  )
}

export default Home