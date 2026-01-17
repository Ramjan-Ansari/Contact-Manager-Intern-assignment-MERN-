import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Nabvar = () => {
  return (
    <div className='flex justify-between px-5 items-center sm:h-[90px] w-full h-[70px] shadow-sm shadow-black  '>
        <Link to={'/'} className='text-lg font-medium w-52'>Contact <span className='text-orange-600'>Management</span></Link>
        <ul className='flex justify-around gap-2 sm:gap-10 '>
            <NavLink to={'/'} className='hidden sm:block'>
                <h1>Home</h1>
            </NavLink>
            <NavLink to={'/contact'}>
                <h1>Contact Add</h1>
            </NavLink>

            <NavLink to={'/list'}>
                <h1>List</h1>
            </NavLink>
        </ul>
    </div>
  )
}

export default Nabvar