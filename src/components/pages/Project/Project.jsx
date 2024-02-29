import React from 'react'
import './Project.css'
import { Logo2 } from '../../Logo/Logo2'
import { Card } from '../../Card/Card'
import { content } from '../../Content/Content'


export const Project = () => {
  return (
    <>
    <section className='project'>
      <Logo2/>
      <h1>Proyectos</h1>
      </section>
      <hr />
      <div className='cardd'>
      <div className="card-1">
            {
              content.map(card=>(
                <Card
                  key={card._id}
                  img={card.img}
                  title={card.title}
                  description={card.description}
                link={card.link}
                />
              ))
            }
        </div>
        </div>
    </>
  )
}


