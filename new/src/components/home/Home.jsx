import React from 'react'
import CardHtml from '../cards/CardLeng'
import html from '../../assets/icons/iconHtml.svg'
import css from '../../assets/icons/iconCss.svg'
import js from '../../assets/icons/iconJs.svg'
import './home.css'

const Home = () => {
  return (
    <div className='fondoHome'>
      <div className='Intro'>
        <h1> Hola </h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam explicabo amet similique repudiandae laboriosam maiores fugiat, 
            quia, aut officia porro incidunt voluptates cumque facere cum vero, iste quisquam vel libero!</p>
      </div>

      <div className='skils'>
       <h1 className='txtLeng'> Lenguajes </h1>
        <div className='cardsLeng'>
          <CardHtml foto={html}/>
          <CardHtml foto={css}/>
          <CardHtml foto={js}/>
        </div>
      </div>
    </div>
  )
}

export default Home
