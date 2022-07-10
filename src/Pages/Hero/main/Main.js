import React from 'react'
import bg from './bg.jpg'
import './mainStyle.scss'

const Main = () => {
  return (
    <>
      <div>

      <div className="me"> 
      <h1>Hello! I'm Joshua Melendres,</h1>
      <h1>I am a Digital Artist &  </h1>
      <h1><span>Web Developer.</span></h1>
      </div>
      <img src={bg} alt='' /> 
     
      </div>
      
    </>
  )
}

export default Main