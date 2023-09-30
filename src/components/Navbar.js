import React, { useState } from 'react'
import Banner from './Banner'


function Navbar() {

  let [open,setOpen]=useState(false);
  let Links=[
    {name:"HOME",link:'#'},
    {name:"ABOUT",link:'#about'},
    {name:"PROJECTS",link:'#projects'},
    {name:"CERTIFICTIONS",link:'#certification'},
    {name:"CONTACT",link:'#contact'},
    

  ];
  window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("shadow-md");
      navbar.classList.add("bg-opacity-100");
      navbar.classList.add("bg-[#00cdac]");
      navbar.classList.add("text-white");
    } else {
      navbar.classList.remove("shadow-md");
      navbar.classList.remove("bg-opacity-100");
      navbar.classList.remove("bg-[#00cdac]");
      navbar.classList.remove("text-white");
    }
  });

  return (

    
    <nav id="navbar" className=' w-full z-10 left-0 fixed bg-opacity-0  text-[#14142b] font-extrabold' >
      <div className='md:flex flex-wrap items-center justify-around   py-3 md:px-7 px-7'>
      <a  class="flex items-center justify-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
             <span class="self-center text-2xl font-semibold whitespace-nowrap ">LovelGeorge.com</span>
        </a>

       <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
       <ion-icon  name={open ? 'close':'menu'}></ion-icon>
       </div>

        <ul className={`md:flex flex-wrap md:items-center justify-around transition-all-duration-500 ease-in ${open ?'':'hidden'}`}>
          
          {
            Links.map((link)=>(
               <li key={link.name} className='md:p-5 md:text-lg'>
                <a href={link.link}>{link.name}</a>
               </li>
            ))
          }
         
        </ul>
      </div>
      

    </nav>

    

    
    
  )
}

export default Navbar