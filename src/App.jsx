import React from 'react'
import './App.css'
import SideBar from './components/sidebar/sidebar.jsx';
import Home from './components/home/home';
import Services from './components/services/services';
import Resume from './components/resume/resume';
import Portfolio from './components/porfolio/portfolio';
import About from './components/about/about';
import Contact from './components/contact/contact';
const App = () => {
  return (
    <>
    <div className='main_container'>
    <SideBar />
    <main className='main'>
      <Home />
      <About />
      <Services />
      <Resume />
      <Portfolio />
      <Contact />
    </main>
    </div>
    </>
  )
}

export default App