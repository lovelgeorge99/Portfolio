import React from 'react'
import c1 from '../images/certifications/c1.jpg'
import c2 from '../images/certifications/c2.jpg'
import c3 from '../images/certifications/c3.jpg'
import c4 from '../images/certifications/c4.jpeg'
import c5 from '../images/certifications/c5.jpg'
import c6 from '../images/certifications/c6.jpg'


function Certifications() {
  return (
    <div className='md:container mx-auto' id='certification'>
     <h2 className='text-3xl drop-shadow-md  mb-5 md:text-5xl md:font-bold   text-[#272341] text-center '>
       Certifications
      </h2>   
<div class="grid grid-cols-2 md:grid-cols-3 gap-5 m-5">
    <div>
        <img className="h-auto max-w-full rounded-lg" src={c1} alt="" />
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={c2} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={c3} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={c4} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={c5} alt=""/>
    </div>
    <div>
        <img className="h-auto max-w-full rounded-lg" src={c6} alt=""/>
    </div>
    
    
</div>

    </div>
  )
}

export default Certifications