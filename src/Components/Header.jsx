import React from 'react'

import {Container, Logo, LogoutBtn} from './index'

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

function Header() {

  

  
  const navigate = useNavigate()
 
  const navItems = [
    {
      name: 'Home',
      slug: "/",
     
    }, 
    {
      name: "Profile",
      slug: "/profile",
      
  },
  
  ]
  return (
    <header className='  ml-80 mr-110  shadow font-medium  text-white border border-white/40 border-t-0 border-x-0' >
   
      <Container> 
     
        <nav className='flex justify-center  ' >
         
         
          <ul className='flex' >
         
            {navItems.map((item)=>(
       
              
                <li key={item.name} >
                  <button  
                   onClick={() => navigate(item.slug)}
                  className='inline-bock px-6 py-2 duration-200 hover:bg-white/10 rounded-full cursor-pointer'
                  >
                    {item.name}
                  </button>
                </li>
             
              
            ))}
      
            
              <li> 
                <LogoutBtn/>
              </li>
          

          </ul>


        </nav>

      </Container>
    </header>
  )
}

export default Header