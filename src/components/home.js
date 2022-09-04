import React from 'react';
import Hero from './hero';
import About from './about';
import Trapezoid from './trapezoid';
import ProjectCard from './projectCard';
import Contact from './contact';
import JobyLogo from './assets/joby-logo.png';
import VolvoLogo from './assets/volvo-logo.png';
import JobyImg from './assets/Joby Pics/IMG_0724.jpg';
import VolvoImg from '../assets/Volvo.png';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Trapezoid text='Experience' upper={true} />
      <ProjectCard
        logo={VolvoLogo}
        image={VolvoImg}
        role='Test Engineering Intern'
        text='Test Engineering Intern in during summer 2022. Performed tests on electric vehicle prototype and diesel compactors. Designed Solar energy solutions for EV’s.

  Utilized Dewesoft and Ipetronik softwares to test pressure transducers, thermocouples, accelerometers, etc. Worked with Automotive CAN networks'
        link='https://www.vcesvolvo.com/'
        reverse={false}
      />
      <ProjectCard
        logo={JobyLogo}
        image={JobyImg}
        role='Test Equipment Design Engineering Intern'
        text='Designed and carried out tests for eVTOL aircraft components. Utilized rapid prototyping for equipment upgrades involving dampeners, laser sights, machined aluminum, and steel. Designed parts to be made by waterjet, laser cutter, 3D printer, and CNC.
  
  Equipment designed in SolidWorks and Catia, working in tandem with fellow engineers to produce testing equipment involving fracture testing, water flow rate ability, and impact hardness.'
        link='https://www.jobyaviation.com/'
        reverse={true}
      />
      <Trapezoid text='Contact' upper={false} />
      <Contact />
    </>
  );
}
