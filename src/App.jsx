import React from 'react'
import Hero from './Components.jsx/Hero'
import About from './Components.jsx/About'

const App = () => {
  return (
    <>
      <div className='bg-[rgb(18,30,40)] w-full h-fit'>
        <Hero />
        <About />
      </div>
    </>
  )
}

export default App