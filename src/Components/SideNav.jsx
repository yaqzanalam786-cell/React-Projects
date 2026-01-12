import React from 'react'
import {Container, Logo, LogoutBtn} from './index'

import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'
import {
  Home,
  User,
  Bell,
  MessageCircle,
  Compass,
  PlusSquare
} from "lucide-react";


function SideNav() {
    const navigate = useNavigate()
   
    const navItems = [
      {
        name: 'Home',
        slug: "/",
         icon: Home,
       
      }, 
      {
        name: "Profile",
        slug: "/profile",
         icon: User,
        
    },
      {
        name: "Notification",
        slug: "/",
        icon: Bell,
        
    },
      {
        name: "Chat",
        slug: "/",
        icon: MessageCircle,
        
    },
      {
        name: "Explore",
        slug: "/",
        icon: Compass,
        
    },
      {
        name: "Post",
        slug: "/add-post",
        icon: PlusSquare,
        
    },
    
    
    ]

  return (
    <div className="fixed top-0 left-0 h-screen w-80 bg-black text-white border border-white/40 border-y-0 border-l-0">
            <Container> 
           
              <nav className='flex flex-col justify-center font-bold text-2xl ' >
                 <div className='mr-4' >
                 <Link to = '/' >
                  <Logo width='90px' />
                </Link>
              </div>
            
            
               
               
                <ul className='flex flex-col gap-6 mt-6 w-full px-4' >
               
                  {navItems.map((item) => {
                  const Icon = item.icon; 

                  return (
                    <li key={item.name}>
      <button
        onClick={() => navigate(item.slug)}
        className="w-full flex items-center gap-4 px-6 py-3 duration-200 hover:bg-white/10 rounded-full cursor-pointer"
      >
        <Icon size={22} className="text-white/80" />
        <span>{item.name}</span>
      </button>
    </li>
  );
})}
            
                  
                    
                
      
                </ul>
      
      
              </nav>
      
            </Container>
    </div>
  )
}

export default SideNav