import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='fondoNavbar'>
        <div className='divNavbar'>
            <div className='logoNavbar'>
                <h1>Lucas Olguin</h1>
            </div>
            <div> 
                <ul className='listNavbar'>
                    <li> Apartado 1 </li>
                    <li> Apartado 2 </li>
                    <li> Apartado 3 </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar
