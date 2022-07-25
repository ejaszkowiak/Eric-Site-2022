import React, { useEffect, useState } from 'react';
import "../styles/components/all.css"
import EricTesseract from "../assets/EricTesseract.mp4"
// import EricTesseractGIF from "../assets/EricTesseract.gif"

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)
   
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 720) {
        setIsMobile(true)
    } else {
        setIsMobile(false)
    }
  }

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
  // <img src={EricTesseractGIF} alt="Eric"/> 
  return (
    <div className='hero-container'>
      <div className='video-container'>
        {isMobile ?
        <video autostart autoPlay muted loop playsinline id="myVideo">
          <source src={EricTesseract} type="video/webm" />
        </video>
        :
          <video autostart autoPlay muted loop playsinline id="myVideo">
          <source src={EricTesseract} type="video/webm" />
        </video>
        }
      </div>
      <div className="hero-text">
        <h2>Eric Jaszkowiak</h2>
        <h3>Electro-Mechanical Engineer</h3>
      </div>
      <div className='hero-header'>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">R&eacute;sum&eacute;</a></li>
          <li><a href="mailto:ejaszkowiak@gmail.com">Contact</a></li>
        </ul>
      </div>

    </div>
  )
}
