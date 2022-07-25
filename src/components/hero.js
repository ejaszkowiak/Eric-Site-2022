import React from 'react'
import "../styles/components/all.css"
import EricTesseract from "../assets/EricTesseract.webm"

export default function Hero() {
  return (
    <div className='hero-container'>
      <div className='video-container'>
        <video controls="false" autostart autoPlay muted loop playsinline="true" disablePictureInPicture="true" id="myVideo">
          <source src={EricTesseract} type="video/webm" />
        </video>
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
