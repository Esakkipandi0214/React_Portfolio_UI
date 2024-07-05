import React from 'react'
import  './contact.css'
const contact = () => {
  return (
    <div className="contact " id='contact'>
      <h2 className="section_title sTitle ">Get In Touch</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk about everything</h3>
          <p className="contact_details">Don't like forms send me
          an email.</p>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST" className="contact_form">
          <div className="contact_form-group">
              <input type="hidden" name="access_key" value="f0c56849-8d4e-40d1-831e-0277e09a9869" />
              <input type="text" name='name' className="contact_form-input" placeholder='Insert your name'/>
              <input type="email" name='email' className="contact_form-input" placeholder='Insert your email'/>        
              <input type="text" name='subject' className="contact_form-input" placeholder='Insert your subject'/><br />        
            <textarea name="your Message" id="" cols="30" rows="10"  className='.contact_form-area' placeholder='write your message'></textarea><br />
            <button type='submit' className="btn contact_btn">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default contact