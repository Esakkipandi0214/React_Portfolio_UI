import React from 'react'
import './about.css'
import Man from '../../assets/hacker.png'
import AboutBox from './AboutBox'

const about = () => {
  return (
    <section className='about container section' id='about'>
        <h2 className='section_title'>About Me</h2>

        <div className='about_container grid'>
            <img src={Man} alt="" className='about_img' width={100} height={100}/>

            <div className='about_data grid'>
                <div className='about_info'>
                    <p className='about_description'>I am Esakki Pandi, web
                    devloper. I have few handson experience in few web design
                    and development. I am a Self learner in Front-End developement.</p>
                    <a href="" className='btn'>Download CV</a>
                </div>

                <div className='about_skills grid'>
                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">JavaScript</h3>
                            <span className="skills_number">70%</span>
                        </div>

                        <div className="skills_bar">
                        <span className="skills_percentage Javascript"></span>
                    </div>
                    </div>

                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">HTML</h3>
                            <span className="skills_number">70%</span>
                        </div>

                        <div className="skills_bar">
                        <span className="skills_percentage HTML"></span>
                    </div>
                    </div>

                    <div className="skills_data">
                        <div className="skills_titles">
                            <h3 className="skills_name">CSS</h3>
                            <span className="skills_number">70%</span>
                        </div>

                        <div className="skills_bar">
                        <span className="skills_percentage CSS"></span>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <AboutBox />
    </section>
  )
}

export default about