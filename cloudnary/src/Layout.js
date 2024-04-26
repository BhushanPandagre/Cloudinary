
import React from 'react'
import  { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (    
    <>
   
    <div className='header'>
      <div className='header-1'>
      <Link to="home">Home</Link>
      <Link to="insert">Insert</Link>
      <Link to="display">Dispaly</Link>
      </div>
  
    </div>

    <div id='content'>
    <Outlet/>
    </div>

  
     <h4 className='footer'>www.Cloudnary.com</h4> 
    </>  
  )
}

export default Layout