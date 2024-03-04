import React from 'react'
import java from '../../../assets/java.png'
import js from '../../../assets/js.png'
import python from '../../../assets/python.png'
import mongo from '../../../assets/mongo.png'
import ProgressBar from "@ramonak/react-progress-bar";
import './Experences.css'
import { Logo2 } from '../../Logo/Logo2'


export const Experences = () => {
  return (
    <>
    <section className='experence'>
      <Logo2/>
      <h1>Experiencia</h1>
    </section>
 
   <div className='lenguajes'>
    <div className='java'>
  <img className='java-i' src={java} alt="java" />
  <ProgressBar  completed={60}
bgColor='#008000' 
baseBgColor='#adff2f' />
  </div>
  <div className='js'>
  <img className='js-i' src={js} alt="js" />
  <ProgressBar   completed={60} 
  bgColor='#008000' 
  baseBgColor='#adff2f'/>
  </div>
  <div className='python'>
  <img className='python-i' src={python} alt="python" />
  <ProgressBar  completed={60} 
bgColor='#008000' 
baseBgColor='#adff2f'/>
  </div>
  <div>
  <img className='mongo-i'  src={mongo} alt="mongo" />
  <ProgressBar  completed={60}
  bgColor='#008000' 
  baseBgColor='#adff2f'
 />
  </div>
  </div>
    </>
  )
}

