import React from 'react';
import '../styles/components/all.css';
import resume from '../assets/Eric_Jaszkowiak_Resume.pdf'
export default function About() {
  return (
    <div className='about-container'>
      <div className='about-text'>
        <h1>About Me</h1>
        <div className='fancy-rectangle' />
        <p>
          I am an Electro-Mechanical Engineering student at Cal Poly Pomona, CA.
          I have experience as a Test Engineer Intern at Volvo with electric
          vehicles (EV), and Joby Aviation with electric vertical take off and
          landing aircraft (eVTOL). Graduating in December, 2023.
        </p>
      </div>
      <div className='button-container'>
        <a href={resume} download>R&eacute;sum&eacute;</a>
      </div>
    </div>
  );
}
