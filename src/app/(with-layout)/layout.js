import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const layout = ({children}) => {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
    {children}
    </div>

      <Footer/>
    </>
  )
}

export default layout
