import React from 'react'

import './References.css'
import { Logo2 } from '../../Logo/Logo2'
import { Contents } from '../../Content/Contents'
import { Cards } from '../../Card/Cards'

export const References = () => {
  return (
    <>
    <section className='references'>
    <Logo2/> 
      <h1>Referencias</h1>
      </section>
      <hr />
      <div className="cards">
            {
              Contents.map(Cardss=>(
                <Cards
                  key={ Cardss._id}
                  title={Cardss.title}
                  cellphone={Cardss.cellphone}
                  description={Cardss.description}
                email={Cardss.email}
                />
              ))
            }
        </div>
    
  </>
  )
}

