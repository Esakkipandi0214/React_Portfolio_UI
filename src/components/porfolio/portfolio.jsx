import React, { useState } from 'react'
import  './portfolio.css'
import Menu from './Menu'
const portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filteritem = (categoryItem) =>{ 
      const updatedItems = categoryItem === "Everything" ? Menu : Menu.filter((curElem) =>{
        return curElem.category === categoryItem;
      })
      setItems(updatedItems)
    }
  
  return (
    <div className="worK container section Wcontainer" id='work'>
      <h2 className="section_tile">Recent Works</h2>

      <div className="work_filters">
        <span className="work_item" onClick={() => filteritem("Everything")} >Everything</span>
        <span className="work_item" onClick={() => filteritem("Design")}>Design</span>
        <span className="work_item" onClick={() => filteritem("Arts")}>Arts</span>
        <span className="work_item" onClick={() => filteritem("Branding")}>Branding</span>
      </div>

      <div className="work_container grid">
        {items.map((elem) => {
        const {id, image, title, category} = elem;
        return(
          <div className="work_card" key={id}>
            <div className="work_thumbnail">
              <img src={image} alt="" className='work_img'/>
              <div className="work_mask"></div>
            </div>

            <span className="work_category">{category}</span>
            <h3 className="work_title">{title}</h3>
            <a href="" className="work_button">
              <i className="icon-link work_button-icon"></i>
            </a>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default portfolio