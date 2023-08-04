import React from 'react'
import { motion ,useScroll } from 'framer-motion'
import news from '../images/news.jpg'

function AboutMe() {
    let skills=[
        {name:"HTML5",icon:<ion-icon name="logo-html5"></ion-icon>,color:'text-orange-500',size:'text-5xl'},
        {name:"CSS3",icon:<ion-icon name="logo-css3"></ion-icon>,color:'text-blue-500',size:'text-5xl'},
        {name:"Python3",icon:<ion-icon name="logo-python"></ion-icon>,color:'text-yellow-400',size:'text-5xl'},
        {name:"ReactJS",icon:<ion-icon name="logo-react"></ion-icon>,color:'text-blue-700',size:'text-5xl'},
        {name:"Django",icon:'dj',color:'text-green-700',size:'text-3xl'},
        {name:"JavaScript",icon:<ion-icon name="logo-javascript"></ion-icon>,color:'text-yellow-500',size:'text-5xl'},
        {name:"Docker",icon:<ion-icon name="logo-docker"></ion-icon>,color:'text-blue-500',size:'text-5xl'},
        {name:"Gitlab",icon:<ion-icon name="logo-gitlab"></ion-icon>,color:'text-orange-500',size:'text-5xl'}
    
      ];
  
  return (
    <div id='about' className=' mx-auto p-5 bg-[#fff] '>
               <div>
         


         {/* <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <div  class="border-t border-gray-200 dark:border-gray-600">

                 <marquee>
                 <div class=" bg-white rounded-lg  dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                     <dl class="grid  grid-cols-2 gap-4  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-10 dark:text-white sm:p-8">
                         {
                             skills.map((skill)=>(
                             <div class="flex flex-col items-center justify-center">
                                     <dt class={`mb-2 ${skill.size} font-extrabold ${skill.color}`}>{skill.icon}</dt>
                                     <dd class="text-gray-500 dark:text-gray-400">{skill.name}</dd>
                             </div>
                             ))
                         }
                     </dl>
                 </div>
                 </marquee>
                 
                 
             </div>
         </div> */}


      </div>
      <h2 className='text-3xl drop-shadow-md  mb-5 md:text-5xl md:font-bold   text-[#272341] text-center '>
       About Me 
      </h2>

      <div className=' flex flex-row  flex-wrap justify-center '>


      
         <div className='md:basis-1/4 m-5'>
          {/* <h1 className='text-3xl font-bold text-center'> Skills </h1> */}


            {/* <div class="  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div  class="border-t border-gray-200 dark:border-gray-600">
                    <div class=" p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" id="stats" role="tabpanel" aria-labelledby="stats-tab">
                        <dl class="grid  grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-5 dark:text-white sm:p-8">
                            {
                                skills.map((skill)=>(
                                <div class="flex flex-col items-center justify-center">
                                        <dt class={`mb-2 ${skill.size} font-extrabold ${skill.color}`}>{skill.icon}</dt>
                                        <dd class="text-gray-500 dark:text-gray-400">{skill.name}</dd>
                                </div>
                                ))
                            }
                        </dl>
                    </div>
                    
                    
                </div>
            </div> */}
             <img className='shadow-md' src={news} />


         </div>
               <div className='center w-auto md:basis-1/3 m-5   border-black'>
        {/* <div className='grid  grid-flow-col md:gap-4 m-5'>
        <div className='shadow-2xl  border md:w-32 md:h-32  rounded-2xl text-center  border-black mx-auto my-auto'>
            jlngfjlsdaf
        </div>
      <div className=' shadow-2xl md:w-32 md:h-32 border rounded-2xl  border-black'>

      </div>
      <div className='md:w-32 md:h-32 border rounded-2xl  border-black'>

      </div>
        </div> */}
        <div className='text-lg auto   mx-auto p-5 font-light' >
          <h1 className=' font-extrabold text-[#02aab0]'>A full stack developer currently based in Montreal,Canada.</h1>
          <span className='text-gray-500 dark:text-gray-400 font-extrabold'>
          I am Lovel George, a passionate and dedicated computer science enthusiast with a strong focus on web development and data science.
        I am a skilled and passionate developer with a strong background in front-end and full-stack web application development. 
          </span>
        
        {/* One of my key assets is my ability to quickly grasp and adapt to new technologies, as demonstrated by 
        my recent experience in using Docker and Nginx for project deployment. I am enthusiastic about joining your team, continuing to learn, 
        and contributing my expertise to meaningful projects. */}
        </div>
        </div>
        
          



      </div>






    </div>
  )
}

export default AboutMe