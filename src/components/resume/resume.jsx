import React from 'react'
import  './resume.css'
import Data from './Data'
import Card from './card'
const resume = () => {
  return (
    <div className="resume container section" id='resume'>
      <h2 className="section_title Rtitle">Experience</h2>

      <div className="resume_container grid">
        <div className="timeline grid">
        {Data.map((val, id) => {
          if(val.categeory === "education"){
            return(
              <Card key={id} icon={val.icon} title={val.title} year={val.year}
              desc={val.desc} />
            )
          }
        })}
        </div>

        {/* <div className="timeline grid">
        {Data.map((val, id) => {
          if(val.categeory === "education"){
            return(
              <Card key={id} icon={val.icon} title={val.title} year={val.year}
              desc={val.desc} />
            )
          }
        })}
        </div> */}

        <div className="timeline grid">
        {Data.map((val, id) => {
          if(val.categeory === "experience"){
            return(
              <Card key={id} icon={val.icon} title={val.title} year={val.year}
              desc={val.desc} />
            )
          }
        })}
        </div>
      </div>
    </div>
  )
}

export default resume