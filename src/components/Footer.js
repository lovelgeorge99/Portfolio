import React from 'react'

function Footer() {
  return (
    <div className='h-32 bg-[#333] text-center  p-5'>
      <div className='flex justify-center   '>
        <div className='text-5xl  m-3 text-white hover:text-black' >
        <a href='https://github.com/lovelgeorge99' target='_blank'><ion-icon name="logo-github"></ion-icon></a>
        </div>
        <div className='text-5xl text-white m-3 hover:text-pink-500'>
        <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div className='text-5xl  m-3 text-white hover:text-blue-400'>
        <a href='https://www.linkedin.com/in/lovel-george/' target='_blank'><ion-icon name="logo-linkedin"></ion-icon></a>
        </div>
      </div>
      <div className='text-center'>
      <span className='bottom-3 text-white'>Copyright @ <a href="" className='hover:text-blue-500'>Lovel George</a></span>
      </div>
       
    </div>
  )
}

export default Footer