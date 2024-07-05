import React from 'react'
import './home.css'
import Hacker from '../../assets/boy (1).png'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
const home = () => {
  return (
    <div className='home container' id='home'>
        <div className='intro'>
            <div className="man_image"><img src={Hacker} alt="" className='man_image-img'/></div>
            <h1 className='home_name'>Esakki Pandi</h1>
            <span className='home_education'>I am Front-End developer</span>
        
        <HeaderSocials />

        <a href="#contact" className='btn'>Hire Me</a>
        
        <ScrollDown />
        </div>
    </div>
  )
}

export default home