import { NavLink } from 'react-router-dom'
import React from 'react'

const Nav = () => {
    return (
        <div className='flex'>
            <p className='text-xl'>Matrix AI Dashboard</p>
            <div className='flex space-x-4'>
                <NavLink to="#" className='text-xl'>Setting</NavLink>
                <NavLink to="#" className='text-xl'>Help</NavLink>
                <NavLink to="#" className='text-xl'>Profile</NavLink>
            </div>
        </div>
    )
}

export default Nav
