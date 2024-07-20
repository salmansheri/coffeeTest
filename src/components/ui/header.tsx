'use client'; 

import { cn } from '@/lib/utlils';
import { useState, useEffect } from 'react'; 

export  const Header = () => {
    let navItems = [
        {
        id: 1, 
        title: "Home"
    }, 
        {
        id: 2, 
        title: "About Us"
    }, 
        {
        id: 3, 
        title: "Features"
    }, 
        {
        id: 4, 
        title: "Purchases"
    }, 
        {
        id: 5, 
        title: "Contact Us"
    }, 
]
  
    const [text, setText] = useState(""); 
   
    
    const onClick = (title: string) => {
        setText(title); 
        
        

    }
  
 

    
    return (
        <header className="z-50 w-[50vw] border border-black  rounded-md bg-nav-bg ">
            <div className="flex items-center justify-between">
                {navItems.map((item) => (

                <nav key={item.id}   onClick={() => onClick(item.title)} className={cn(item.title === text && "text-coffee bg-about-coffee", "hover:cursor-pointer p-1 rounded  ")}>{item.title}</nav>

                ))}
                
            </div>
            
        </header>

    )
}
