import React from 'react'
import About from './Components/About'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Services from './Components/Services'

const App = () => {
  return (
    <div className='App__section'>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App