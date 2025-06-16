import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Connect from './components/Connect'
import Footer from './components/Footer'
import './App.css'

function App() { 
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Connect />
      <Footer />      
    </main>
  )
}

export default App
