import React from 'react'
import "../styles/components/all.css"

export default function Contact() {
  return (
    <div className='contact-container'>
      <h2>Want to get in touch?</h2>  
      <div className='button-container'>
        <a href="mailto:ejaszkowiak@gmail.com">Let's Talk</a>
      </div>
      <div className='links'>
        <a href="https://www.linkedin.com/in/eric-jaszkowiak/"><i class="fa-brands fa-linkedin-in"></i></a>
       <a href="https://github.com/ejaszkowiak"><i class="fa-brands fa-github"></i></a>
      </div>
      <p className='credit'>Made with <a href="https://github.com/domogami"><i class="fa-solid fa-coffee"/></a>  by <a href="https://dominicklee.net">Dom</a></p>
    </div>
  )
}
