import React from 'react'
import {picture} from '../../../assets/perfil.png'

export const Picture = () => {
  return (
    <section>
        <img className='perfil' src={picture} alt="perfil" />
    </section>
  )
}

