import React from 'react'
import {Header} from '../../Layouts/Header/Header'
import { Logo } from '../../Logo/Logo'
import { NavBar } from '../../NavBar/NavBar'
import {Items} from '../../Items/Items'
import { Main } from '../../Layouts/Main/Main'
import {Picture} from '../Picture/Picture'
import { DescriptionPortafile } from '../../DescriptionPortafile/DescriptionPortafile'



export const Home = () => {
  return (
    <>   

    <Main>
    <Picture/>
    <DescriptionPortafile/>
    </Main>

    </> 
  )
}