import { useRef } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Connect from './components/Connect'
import Footer from './components/Footer'


import './App.css'

function App() { 
  const toHome = useRef(null)
  const toServices = useRef(null)
  const toAbout = useRef(null)
  const toConnect = useRef(null)

  function goToHome(){
    toHome.current.scrollIntoView()
  }
  function goToServices(){
    toServices.current.scrollIntoView()
  }
  function goToAbout(){
    toAbout.current.scrollIntoView()
  }
  function goToConnect(){
    toConnect.current.scrollIntoView()
  }
  return (
    <main>
      <Nav  
        goToHome = {goToHome}
        goToServices = {goToServices}
        goToAbout = {goToAbout}
        goToConnect = {goToConnect}
      />
      <Hero 
        ref = {toHome}
      />
      <Services 
        ref = {toServices}        
      />
      <About 
        ref = {toAbout}
      />
      <Projects />
      <Connect 
        ref = {toConnect}
      />
      <Footer 
        goToHome = {goToHome}
        goToServices = {goToServices}
        goToAbout = {goToAbout}
        goToConnect = {goToConnect}
      />      
    </main>
  )
}

export default App
