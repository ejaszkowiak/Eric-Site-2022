import React from 'react'
import "../styles/components/all.css"
export default function Hero() {
  return (
    <div className='hero-container'>
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
