import React from 'react'

const AboutBox = () => {
  return (
    <div className='about_boxes grid'>
        <div className="about_box">
            <i className="about_icon icon-fire"></i>
            <div>
                <h3 className="about_title">1</h3>
                <span className="about_subtitle">StopWatch using React</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-people"></i>
            <div>
                <h3 className="about_title">2</h3>
                <span className="about_subtitle">Tic-Tac-Toe using React</span>
            </div>
        </div>

        <div className="about_box">
            <i className="about_icon icon-badge"></i>
            <div>
                <h3 className="about_title">3</h3>
                <span className="about_subtitle">My Personal Portfolio</span>
            </div>
        </div>
    </div>
  )
}

export default AboutBox