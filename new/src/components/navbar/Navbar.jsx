import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div class='bg-black flex justify-around p-15'>

        <h1 class='text-white text-6xl'> Lucas Olguin </h1>

      <div class='flex text-white list-none gap-4'>
        <li class='bg-gray-800 text-2xl p-6 rounded-3xl'>Acerca de mi</li>
        <li class='bg-gray-800 text-2xl p-6 rounded-3xl'>Proyectos</li>
        <li class='bg-gray-800 text-2xl p-6 rounded-3xl'>Contacto</li>
      </div>

    </div>
  )
}

export default Navbar
