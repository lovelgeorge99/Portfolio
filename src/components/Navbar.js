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
    
    // <nav class="bg-white border-gray-200 dark:bg-gray-900">
    //   <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //     <a  class="flex items-center">
    //         <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
    //         <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    //     </a>
    //     <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center 
    //     text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
    //     focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" 
    //     aria-expanded="false">
    //         <span class="sr-only">Open main menu</span>
    //         <svg class="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
    //             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
    //         </svg>
    //     </button>
    //     <div class="hidden w-full md:block md:w-auto" id="navbar-default">
    //       <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //         <li>
    //           <a href="/home" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
    //         </li>
    //         <li>
    //           <a href="/about" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
    //         </li>
    //         <li>
    //           <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
    //         </li>
    //         <li>
    //           <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
    //         </li>
    //         <li>
    //           <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    
    <nav id="navbar" className=' w-full z-10 left-0 fixed bg-opacity-0  text-[#14142b] font-extrabold' >
      <div className='md:flex flex-wrap items-center justify-around   py-3 md:px-7 px-7'>
      <a  class="flex items-center justify-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" /> */}
             <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">LovelGeorge.com</span>
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