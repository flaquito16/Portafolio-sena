
// import { Home } from './components/Pages/Home/Home'
import { Header } from './components/Layouts/Header/Header'
import { Logo } from './components/Logo/Logo'
import { NavBar } from './components/NavBar/NavBar'
import { Items } from './components/Items/Items'
// import { Project } from './components/pages/Project/Project'
// import { References } from './components/Pages/References/References'


function App() {

  return (
    <>
    <Header>
      <Logo/>
      <NavBar>
      <Items content='Inicio' />
      <Items content='Perfil' />
      <Items content='Proyectos' />
      <Items content='References' />
      <Items content='Experiencia' />
      </NavBar>
</Header>

    </>
  )
}

export default App
