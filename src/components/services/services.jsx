import React from 'react'
import  './services.css'
import Stopwatch from '../../assets/stopwatch.png'
import LoginPage from '../../assets/loginPage.png'
import TicTacToe from '../../assets/tic-tac-toe.png'

const data = [
    {
        id: 1,
        image: Stopwatch,
        title: "StopWatch",
        description: 
            "StopWatch using HTML ,CSS ,React JS"
    },
    {
        id: 1,
        image: LoginPage,
        title: "StopWatch",
        description: 
            "StopWatch using HTML ,CSS ,React JS"
    },
    {
        id: 1,
        image: TicTacToe,
        title: "StopWatch",
        description: 
            "StopWatch using HTML ,CSS ,React JS"
    }
]

const services = () => {
  return (
    <div className='services container section Scontainer' id='services'>
        <h2 className='section_title'>Projects</h2>

        <div className="services_container grid">
            {data.map(({id,image,title,description})=>{
                return(
                    <div className='services_card' key={id}>
                        <img src={image} alt="" className='services_img' width={100} height={100}/>

                        <h3 className='services_title'>{title}</h3>
                        <p className='services_description'>{description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default services