import React from 'react'
import news from '../images/news.jpg'

function AboutMe() {

  
  return (
    <div id='about' className=' mx-auto p-5 bg-[#fff] '>
               <div>
         





      </div>
      <h2 className='text-3xl drop-shadow-md  mb-5 md:text-5xl md:font-bold   text-[#272341] text-center '>
       About Me 
      </h2>

      <div className=' flex flex-row  flex-wrap justify-center '>


      
         <div className='md:basis-1/4 m-5'>

             <img className='shadow-md' src={news} />


         </div>
               <div className='center w-auto md:basis-1/3 m-5   border-black'>
     
        <div className='text-lg auto   mx-auto md:p-5 font-light' >
          <h1 className=' font-extrabold text-[#02aab0]'>A full stack developer currently based in Montreal,Canada.</h1>
          <span className='text-gray-500 dark:text-gray-500 font-bold'>
          I am a full-stack web developer versed in <b> MERN </b>and <b>Django-React</b> setups. My passion for tinkering comes to life in my homelab, where I explore new possibilities.
           Currently a Concordia University student, I'm on the hunt for a full-time web development position. By fusing my skills with my enthusiasm for 
           creating meaningful digital experiences, I'm ready to collaborate and make something remarkable. 
          </span>
        
       
        </div>
        </div>
        
          



      </div>






    </div>
  )
}

export default AboutMe