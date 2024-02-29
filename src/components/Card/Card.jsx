import React from 'react'
import './Card.css'
import { content } from '../Content/Content'

export const Card = ({img,title,description,enlace}) => {
  return (
      <>
        <div className="contentCa">
        <img src={img} alt="" />
            <p className="title">{title}</p>
            <p className="Descrip">{description}</p>
            <a href="#" className="enla">{enlace}</a>
        </div>
        </>
  )
}