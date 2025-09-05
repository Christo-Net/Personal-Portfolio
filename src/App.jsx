import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

const App = () => {
  return (
    <>
      <div className='bg-[rgb(18,30,40)] w-full h-fit'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default App