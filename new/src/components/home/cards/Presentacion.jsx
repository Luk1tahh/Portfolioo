import React from 'react'
import yo from '../../../assets/img/yo.jpg'
import './presentacion.css'

const Presentacion = () => {
  return (
    <div class='border-4 border-white rounded-4xl p-20'>
        <h1 class='text-white text-center text-5xl'>Acerca De Mi</h1>
        <div class='flex justify-between'>
            <p class='text-balance text-white text-2xl p-8'> 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore aliquid nulla corporis sed quibusdam nesciunt 
              ipsam quod porro quo, nihil, earum, neque similique pariatur recusandae autem debitis delectus! Sunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore aliquid nulla corporis sed quibusdam nesciunt 
              ipsam quod porro quo, nihil, earum, neque similique pariatur recusandae autem debitis delectus! Sunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore aliquid nulla corporis sed quibusdam nesciunt 
              ipsam quod porro quo, nihil, earum, neque similique pariatur recusandae autem debitis delectus! Sunt.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore aliquid nulla corporis sed quibusdam nesciunt 
              ipsam quod porro quo, nihil, earum, neque similique pariatur recusandae autem debitis delectus! Sunt. 
            </p>
            <img src={yo} width='400' class='rounded-4xl'/>
        </div>
    </div>
  )
}

export default Presentacion
