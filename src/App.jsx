
import { Header } from './components/Layouts/Header/Header'
import { Logo } from './components/Logo/Logo'
import { NavBar } from './components/NavBar/NavBar'
import { Items } from './components/Items/Items'
import { Picture } from './components/pages/Picture/Picture'
import {Home} from './components/pages/Home/Home'
import './components/App.css'
import { Icons } from './components/Icons/Icons'

// import { Project } from './components/pages/Project/Project'
// import { References } from './components/Pages/References/References'


function App() {

  return (
    <>
    <section className='general'>
    <section className='header-1'>
    <Header >
      <div className='picture'>
      <Picture />
      </div>
      <NavBar>
        <p className='name'>Johan Sebastian Agudelo Cardenas</p>
        <hr className='hr-1'/>
      <Items content='Inicio' link='#Inicio'/>
      <Items content='Perfil' link='#Perfil'/>
      <Items content='Proyectos' link='#Proyectos'/>
      <Items content='Referencias' link='#Referencias'/>
      <Items content='Experiencia' link='#Experiencia'/>
      </NavBar>
      <Logo/>
      <Icons className='icons'/>
</Header>
</section>
<section className='home-1'>
<Home/>
</section>
</section>
    </>
    
  )
}

export default App
