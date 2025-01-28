import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Mission from './Components/Mission'
import Impact from './Components/Impact'
import Tools from './Components/Tools'
import Partner from './Components/Partner'
import Blogs from './Components/Blogs'
import Footer from './Components/Footer'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Mission/>
      <Impact/>
      <Tools/>
      <Partner/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default App