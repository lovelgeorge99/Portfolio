import React from 'react'
import Typed from 'react-typed'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faDat} from '@fortawesome/free-regular-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'

import banner1 from '../images/banner1.jpg'

function Banner() {
  let skills=[
    // {name:"",icon:'Tech Stack |',color:'text-black-500',size:'text-2xl'},
    {name:"",icon:<ion-icon name="logo-html5"></ion-icon>,color:'text-orange-500',size:'text-2xl'},
    {name:"",icon:<ion-icon name="logo-css3"></ion-icon>,color:'text-blue-500',size:'text-2xl'},
    {name:"",icon:<ion-icon name="logo-python"></ion-icon>,color:'text-yellow-400',size:'text-2xl'},
    {name:"",icon:<ion-icon name="logo-react"></ion-icon>,color:'text-blue-700',size:'text-2xl'},
    {name:"",icon:'dj',color:'text-green-700',size:'text-3xl'},
    {name:"",icon:<ion-icon name="logo-javascript"></ion-icon>,color:'text-yellow-500',size:'text-2xl'},
    {name:"",icon:<ion-icon name="logo-docker"></ion-icon>,color:'text-blue-500',size:'text-2xl'},
    {name:"",icon:<ion-icon name="logo-gitlab"></ion-icon>,color:'text-orange-500',size:'text-2xl'},
    {name:"",icon:<FontAwesomeIcon icon={faDatabase} />,color:'text-red-500',size:'text-2xl'}
    

  ];
  return (
    <div className='p-10 bg-gray-100 '>
    <div className=' flex text-center flex-wrap-reverse justify-center items-center'>
      <div className=''>
      <h1 className="text-3xl  md:text-7xl md:font-bold   text-center  ">Hi, I am <span className=' text-[#00cdac]'> Lovel George
        </span></h1>
      
      <span className='p-3 block'>
      <Typed className='text-3xl'
        strings={[
          "I am a web developer",
          " Passionate",
        ]}
        typeSpeed={150}
        backSpeed={100}
        loop />
      </span>
      
              

    
      
          <button className=" mt-8 bg-white font-extrabold hover:bg-[#00cdac] text-[#00cdac] hover:text-white  hover:shadow-md border border-[#00cdac] py-2 px-4 rounded inline-flex items-center">
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <span>Resume</span>
    </button>
      </div> 
     <div className='align-center'>
     <img src="https://www.lovelgeorge.com/img/mypic.jpg" className=" rounded-full border border-black   md:inline-block w-56 md:w-72 m-24 md:text-3xl " alt="My  Pic" />
     </div>

          

     
     
    </div>
                  
                  
                 
                  <div class="text-center mt-10 md:mt-0 md:container md:mx-auto">
                   
                      <dl class="flex flex-wrap justify-center md:justify-start">
                        <h1 className='text-2xl font-extrabold'>Tech Stacks | </h1>
                     
                          {
                              skills.map((skill)=>(
                              <div class="flex flex-col px-4 items-center justify-center">
                                      <dt class={`mb-2 ${skill.size} font-extrabold ${skill.color}`}>{skill.icon}</dt>
                                     
                              </div>
                              ))
                          }
                      </dl>
                  </div>


                 
                  
                  
             
          
          </div>
    
  )
}

export default Banner