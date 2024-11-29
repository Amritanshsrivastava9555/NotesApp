import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='d-flex justify-content-end pt-3 border-bottom' id='navbar'>
      <NavLink to="/">
        <div className='btn px-2 mx-2 text-dark' style={{backgroundColor:"#FFF8DE"}}>Home</div>
      </NavLink>
      <NavLink to="/pastes">
        <div className='btn px-2 mx-2 me-5 text-dark' style={{backgroundColor:"#FFF8DE"}}>Notes</div>
      </NavLink>
    </div>
  )
}

export default Navbar