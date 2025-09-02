import React from 'react'
import Presentacion from './cards/Presentacion'
import Projects from './cards/Projects'
import './home.css'

const Home = () => {
  return (
    <div class='bg-black pt-50 pb-50 pl-80 pr-80'>
      <Presentacion />
      <Projects />
    </div>
  )
}

export default Home
