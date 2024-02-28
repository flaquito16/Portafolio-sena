import React from 'react'
import {References} from '../References/References'
import { Experences } from '../Experences/Experences'
import {Header} from '../../Layouts/Header/Header'
import { Logo } from '../../Logo/Logo'
import { NavBar } from '../../NavBar/NavBar'
import {Items} from '../../Items/Items'
import { Main } from '../../Layouts/Main/Main'
import {Picture} from '../Picture/Picture'
import { FaWhatsapp } from "react-icons/fa";
import { DescriptionPortafile } from '../../DescriptionPortafile/DescriptionPortafile'
import { Project } from '../Project/Project'
import './Home.css'




export const Home = () => {
  return (
    <>   

    <Main>
    <DescriptionPortafile/>
    <Project/>
    <References/>
    <Experences/>
    {/* <FaWhatsapp/> */}
    </Main>
    
    </> 
  )
}