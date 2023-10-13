import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const [message,setMessage]=useState('Send Message');
  
  const sendEmail = (e) => {
    e.preventDefault();
    setMessage('Sending');

    emailjs
    .sendForm(
      'reactMailer', 
      'template_htvnlsw', 
      form.current,
       'ED2xfxix5EX1wFYe3')
      .then((result) => {
        setMessage('Message Sent');
          console.log(result.text);
      }, (error) => {
          setMessage('Error');
          console.log(error.text);
      });
      form.current.reset();
      
  };
  return (
    <div id='contact' className='sm:container m-5 mx-auto'>
      <h1 className='text-5xl font-bold text-center text-[#02aab0]'>Get In Touch</h1>
     
      <div className='mx-auto bg-black w-64 block h-1 m-3' ></div>

      <div className='flex justify-center'>
    
      <form ref={form} onSubmit={sendEmail} class="w-full max-w-lg">
  <div className="flex flex-wrap  mb-6">
    <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase text-[#00cdac] tracking-wide  text-xs font-bold mb-2" for="grid-first-name">
       Full Name
      </label>
      <input name="from_name" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" required placeholder="Jane Doe" />
    
    </div>
    <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide   text-[#00cdac] text-xs font-bold mb-2" for="grid-first-name">
       Email
      </label>
      <input  name="user_email" className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="email" required placeholder="example@gmail.com" />
    

    </div>
    <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-[#00cdac] text-xs font-bold mb-2" for="grid-first-name">
       Enter Your Message
      </label>
      <textarea name='message' className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Enter Your Message" />
    
    </div>
    <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">

    
     {message === "Send Message" ? 
    <button type="submit" className="flex items-center font-bold rounded-lg bg-blue-500 hover:bg-blue-700  px-4 py-2 text-white">
        <span className="font-medium"> {message}  </span>
      </button>
    :message === "Sending" ?
      <button className="flex items-center font-bold rounded-lg bg-blue-500 hover:bg-blue-700  px-4 py-2 text-white" disabled>
        {message} 
      <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
        </button>
    :message === "Message Sent" ?
    <div className='flex'>
       <button type="submit" class="flex items-center font-bold rounded-lg bg-blue-500 hover:bg-blue-700  px-4 py-2 text-white">
        <span className="font-medium"> Send Message  </span>
      </button>
      <span className='p-3 text-green-500'> Your message has been sent</span>
      </div>
      
        
    :
      <div className='flex'>
      <button type="submit" class="flex items-center font-bold rounded-lg bg-blue-500 hover:bg-blue-700  px-4 py-2 text-white">
      <span className="font-medium"> Send Message  </span>
    </button>
    <span className='p-3 text-red-500'> Message not sent. Try Again!</span>
   </div>
  }

  

    
    </div>
   
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">

  </div>
 
    </form>
      </div>
      
    </div>
  )
}

export default Contact