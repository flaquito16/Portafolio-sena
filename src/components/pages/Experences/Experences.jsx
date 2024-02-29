import React from 'react'
import java from '../../../assets/java.png'
import js from '../../../assets/js.png'
import python from '../../../assets/python.png'
import mongo from '../../../assets/mongo.png'
import './Experences.css'
import { Logo2 } from '../../Logo/Logo2'


export const Experences = () => {
  return (
    <>
    <section className='experence'>
      <Logo2/>
      <h1>Experiencia</h1>
    </section>
   <hr />
   <div className='lenguajes'>
  <img className='java' src={java} alt="java" />
  <img className='js' src={js} alt="java" />
  <img className='python' src={python} alt="java" />
  <img className='mongo' src={mongo} alt="java" />
  </div>
    </>
  )
}

