
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
        
      <Items content='Inicio' />
      <Items content='Perfil' />
      <Items content='Proyectos' />
      <Items content='References' />
      <Items content='Experiencia' />
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
