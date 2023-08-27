import React from 'react'
import news from '../images/news.png'
import prediction from '../images/prediction.png'
import blogImage from '../images/blogImage.png'
import otthub from '../images/otthub.png'

function Projects() {
  return (
    <div id='projects' className=' md:container md:mx-auto'>
      <h2 className='text-3xl drop-shadow-md  mb-5 md:text-5xl md:font-bold text-center '> PROJECTS</h2>

        <div class="flex flex-wrap-reverse justify-center m-10 xl:m-0">
      <div class="xl:basis-2/4  xl:p-16 hover:scale-110 hover:skew-x-1 transition-all ease-in duration-300 ">
      <img className='shadow-md w-full border' src={blogImage} />
      </div>
     <div class="xl:basis-1/4 p-0 md:pt-16 ">
      <h1 className='text-3xl mb-5'>Full Stack Blog Website</h1>
      <p className='font-sans   mb-5'>
      Designed and developed a full-stack blog website using <b>React</b> and <b>Django</b>. Implemented <b> JWT  authentication </b> and implemenmted <b>Redux</b> for 
       state management. Deployed the application in <b>Docker</b> inside my own home lab
      </p>
      <button type="button" class="font-extrabold text-[#00cdac] hover:text-white hover:bg-[#00cdac] bg-white] border border-[#00cdac] rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
        See Live Demo
        </button>

     </div>
    
        </div>

        <div class="flex flex-wrap justify-center  m-10 xl:m-0">
     <div class="md:basis-1/4 md:pt-16">

     <h1 className='text-3xl mb-5'>News Website Using News Api</h1>
      <p className='font-sans  font-light mb-5'>
      Test Project - Used ContextApi, created local db and passed the data via ContextApi to testimonials. Used boostrap, styled-components. The navigation is sticky and hide on scroll down and show back on scroll up. I used some reusable componenents. The app is fully responsive.
      </p>
      <a href='https://news.lovelgeorge.com/' target='_blank'>
      <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800   focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        See Live Demo
        </button>
        </a>
     </div>
     <div class="md:basis-2/4 md:p-16">
      <img className=' shadow-md' src={news} />
      </div>
    
        </div>

        <div class="flex flex-wrap-reverse justify-center m-10 xl:m-0">
      <div class="md:basis-2/4  md:p-16 hover:scale-110 hover:skew-x-1 transition-all ease-in duration-300 ">
      <img className='shadow-md w-full border' src='https://www.lovelgeorge.com/img/house.jpeg' />
      </div>
     <div class="md:basis-1/4 p-0 md:pt-16 ">
      <h1 className='text-3xl mb-5'>Full Stack Blog Website</h1>
      <p className='font-sans  font-light mb-5'>
      Test Project - Used ContextApi, created local db and passed the data via ContextApi to testimonials. Used boostrap, styled-components. The navigation is sticky and hide on scroll down and show back on scroll up. I used some reusable componenents. The app is fully responsive.
      </p>
      <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        See Live Demo
        </button>

     </div>
    
        </div>

        <div class="flex flex-wrap justify-center m-10 xl:m-0">
     <div class="md:basis-1/4 md:pt-16">

     <h1 className='text-3xl mb-5'>House Price Prediction Web Application</h1>
      <p className='font-sans  font-light mb-5'>
      Test Project - Used ContextApi, created local db and passed the data via ContextApi to testimonials. Used boostrap, styled-components. The navigation is sticky and hide on scroll down and show back on scroll up. I used some reusable componenents. The app is fully responsive.
      </p>
      <a href='https://prediction.lovelgeorge.com/' target='_blank'>
      <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        See Live Demo
        </button>
      </a>
     </div>
     <div class="md:basis-2/4 md:p-16">
      <img className=' shadow-md' src={prediction} />
      </div>
    
        </div>


        <div class="flex flex-wrap-reverse justify-center m-10 xl:m-0">
      <div class="md:basis-2/4  md:p-16 hover:scale-110 hover:skew-x-1 transition-all ease-in duration-300 ">
      <img className='shadow-md w-full border' src={otthub} />
      </div>
     <div class="md:basis-1/4 p-0 md:pt-16 ">
      <h1 className='text-3xl mb-5'>Freelancing Project For customer</h1>
      <p className='font-sans  font-light mb-5'>
      Test Project - Used ContextApi, created local db and passed the data via ContextApi to testimonials. Used boostrap, styled-components. The navigation is sticky and hide on scroll down and show back on scroll up. I used some reusable componenents. The app is fully responsive.
      </p>
      <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        See Live Demo
        </button>

     </div>
    
        </div>






       
      


    </div>


  )
}

export default Projects