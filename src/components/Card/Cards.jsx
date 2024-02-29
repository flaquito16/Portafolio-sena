import React from 'react'
import './Card.css'




export const Cards = ({cellphone,title,description,email}) => {
  return (
      <>
        <div className="content-2">
        <p className="title">{title}</p>
        <p className='cellphone'>{cellphone}</p>
        <p className="Description">{description}</p>
        <p className='email'>{email}</p>
        </div>
        </>
  )
}