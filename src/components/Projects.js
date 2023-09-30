import React from 'react'
import news from '../images/news.png'
import prediction from '../images/prediction.png'
import blogImage from '../images/blogImage.png'
import otthub from '../images/otthub.png'
import expense from '../images/expense.png'
import opencv from '../images/opencv.gif'

function Projects() {
  return (
    <div id='projects' className=' md:container md:mx-auto'>
      <h2 className='text-3xl drop-shadow-md  mb-5 md:text-5xl md:font-bold text-center '> PROJECTS</h2>


      <div class="flex flex-wrap justify-center  m-10 xl:m-0">
     <div class="md:basis-1/4 md:pt-16">

     <h1 className='text-3xl mb-5'>MoneyMate</h1>
      <p className='font-sans  mb-5'>
      Developed an expense tracker using <b>MERN stack</b> and implemenmted dynamic charts with<b> react-chartjs-2</b> integration. Leveraged <b>redux</b> for streamlined state management
       and incorporated user authentication via <b>JSON Web Token (JWT)</b>. Deployed the application using Docker. 
      </p>
      <a href='https://moneymate.lovelgeorge.com/' target='_blank'>
      <button type="button" class="font-extrabold text-[#00cdac] hover:text-white hover:bg-[#00cdac] bg-white] border border-[#00cdac] rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
        See Live Demo
        </button>

        </a>
     </div>
     <div class="xl:basis-2/4  xl:p-16 hover:scale-110 hover:skew-x-1 transition-all ease-in duration-300 ">
      <img className=' shadow-md w-full border' src={expense} />
      </div>
    
        </div>

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
      <a href='https://blog.lovelgeorge.com/' target='_blank'>
      <button type="button" class="font-extrabold text-[#00cdac] hover:text-white hover:bg-[#00cdac] bg-white] border border-[#00cdac] rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
        See Live Demo
        </button>

        </a>

     </div>
    
        </div>

        <div class="flex flex-wrap justify-center  m-10 xl:m-0">
     <div class="md:basis-1/4 md:pt-16">

     <h1 className='text-3xl mb-5'>News Website Using News Api</h1>
      <p className='font-sans  mb-5'>
      Developed a news website using <b> Python Django</b>, fetching data from the News API, and styled it with <b>Bootstrap</b>.Implemented a <b>RESTful API</b> using Django, enabling
       seamless interaction between the website and external data sources. Deployed the application in <b>Docker</b> inside my own home lab
      </p>
      <a href='https://news.lovelgeorge.com/' target='_blank'>
      <button type="button" class="font-extrabold text-[#00cdac] hover:text-white hover:bg-[#00cdac] bg-white] border border-[#00cdac] rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
        See Live Demo
        </button>

        </a>
     </div>
     <div class="xl:basis-2/4  xl:p-16 hover:scale-110 hover:skew-x-1 transition-all ease-in duration-300 ">
      <img className=' shadow-md w-full border' src={news} />
      </div>
    
        </div>

        <div class="flex flex-wrap-reverse justify-center m-10 xl:m-0">
      <div class="md:basis-2/4  md:p-16 hover:scale-110 hover:skew-x-1 transition-all ease-in duration-300 ">
      <img className='shadow-md w-full border' src={prediction} />
      </div>
     <div class="md:basis-1/4 p-0 md:pt-16 ">
      <h1 className='text-3xl mb-5'>House Price Prediction (Linear Regression)</h1>
      <p className='font-sans  mb-5'>
      Designed a web app that predicts house prices using a Bengaluru house price <b>linear regression model</b>. Used the python's <b>Scikit-Learn </b> library  
       to train and test the model. Implemeted a web app using <b>flask</b> for the model to easily predict  the price of a house.
      </p>
      <a href='https://prediction.lovelgeorge.com/' target='_blank'>
      <button type="button" class="font-extrabold text-[#00cdac] hover:text-white hover:bg-[#00cdac] bg-white] border border-[#00cdac] rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
        See Live Demo
        </button>

        </a>

     </div>
    
        </div>

        <div class="flex flex-wrap justify-center m-10 xl:m-0">
     <div class="md:basis-1/4 md:pt-16">

     <h1 className='text-3xl mb-5'>OpenCV Object Detection</h1>
      <p className='font-sans  mb-5'>
      Test Project - Used ContextApi, created local db and passed the data via ContextApi to testimonials. Used boostrap, styled-components. The navigation is sticky and hide on scroll down and show back on scroll up. I used some reusable componenents. The app is fully responsive.
      </p>
      <a href='https://blog.lovelgeorge.com/post/opencv-object-detection' target='_blank'>
      <button type="button" class="font-extrabold text-[#00cdac] hover:text-white hover:bg-[#00cdac] bg-white] border border-[#00cdac] rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
        See Live Demo
        </button>

        </a>
     </div>
     <div class="xl:basis-2/4  xl:p-16 hover:scale-110 hover:skew-x-1 transition-all ease-in duration-300 ">
      <img className=' shadow-md w-full border' src={opencv} />
      </div>
    
        </div>


        <div class="flex flex-wrap-reverse justify-center m-10 xl:m-0">
      <div class="md:basis-2/4  md:p-16 hover:scale-110 hover:skew-x-1 transition-all ease-in duration-300 ">
      <img className='shadow-md w-full border' src={otthub} />
      </div>
     <div class="md:basis-1/4 p-0 md:pt-16 ">
      <h1 className='text-3xl mb-5'>Freelancing Project For customer</h1>
      <p className='font-sans  mb-5'>
      Crafted a static Bootstrap website for a client's online business, blending Bootstrap, HTML, CSS, and basic JavaScript. Seamlessly translated client vision into a user-friendly, responsive design, effectively showcasing products and services.
      </p>
      <a href='https://otthub.lovelgeorge.com/' target='_blank'>
      <button type="button" class="font-extrabold text-[#00cdac] hover:text-white hover:bg-[#00cdac] bg-white] border border-[#00cdac] rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ">
        See Live Demo
        </button>

        </a>
     </div>
      
        </div>






       
      


    </div>


  )
}

export default Projects