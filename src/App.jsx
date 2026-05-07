import { useEffect, useRef, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Connect from './components/Connect'
import Footer from './components/Footer'


import './App.css'

function App() { 
  const [menuPressed, setMenuPressed] = useState(false)

  const toHome = useRef(null)
  const toServices = useRef(null)
  const toAbout = useRef(null)
  const toConnect = useRef(null)
  const toProjects = useRef(null)

  const goToHome = ()=> {
    toHome.current.scrollIntoView()
    setMenuPressed(false)
  }
  const goToServices = ()=> {
    toServices.current.scrollIntoView()
    setMenuPressed(false)
  }
  const goToAbout = ()=> {
    toAbout.current.scrollIntoView()
    setMenuPressed(false)
  }
  const goToConnect = ()=> {
    toConnect.current.scrollIntoView()
    setMenuPressed(false)
  }
  const goToProjects = ()=> {
    toProjects.current.scrollIntoView()
    setMenuPressed(false)
  }

  return (
    <main>
      <Nav  
        goToHome = {goToHome}
        goToServices = {goToServices}
        goToAbout = {goToAbout}
        goToConnect = {goToConnect}
        goToProjects = {goToProjects}
        menuPressed = {menuPressed}
        setMenuPressed = {setMenuPressed}
      />
      <Hero 
        ref = {toHome}
        goToConnect = {goToConnect}
      />
      <Services 
        ref = {toServices}        
      />
      <About 
        ref = {toAbout}
      />
      <Projects 
        ref = {toProjects}
      />
      <Connect 
        ref = {toConnect}
      />
      <Footer 
        goToHome = {goToHome}
        goToServices = {goToServices}
        goToAbout = {goToAbout}
        goToConnect = {goToConnect}
        goToProjects = {goToProjects}
      />      
    </main>
  )
}

export default App
