import React from 'react';
import Trapezoid from '../components/trapezoid';
import ProjectTrapezoid from '../components/projectTrapezoid';
import arrow from '../assets/arrow.svg';
import robot1 from './robotImages/robot1.png'
import robot2 from './robotImages/robot2.png'
import robot3 from './robotImages/robot3.png'
import '../styles/components/all.css';

export default function Robot() {
  return (
    <div className='robot-container'>
      <a href='/guitar'>
        <img className='left-arrow' src={arrow} alt='left-arrow' />
      </a>
      <a href='/assorted_projects'>
        <img className='right-arrow' src={arrow} alt='right-arrow' />
      </a>
      <Trapezoid text='Edge Detection Robot' upper={true} />
      <div className='robot-grid'>
        <img className='img1' src={robot1} alt='robot1' />
        <p>
         I worked on this robot in my Controls class with a group of peers seeking to better understand and create an autonomous vehicle system. Our project specifically is designed to detect and avoid the edges of a table as it wanders across it. It makes use of an ultrasonic sensor that signals the motors to stop when it encounters a gap. This is all coordinated through an Arduino UNO board. 
        </p>
        <p className='p2'>
         On the robot I contributed by designing the 3D printed chassis and aiding with coding the arduino. I designed the chassis in SolidWorks and 3D printed it myself. For the Arduino, I learned how to code in the Arduino language, how to control electronic devices and fine tune them to suit a particular environment. This project helped me gain an insight into the challenges of enabling cars to drive autonomously and how a controls background can help achieve that. 
        </p>
        <div className='last-grid-item'>
          <img className='img2' src={robot2} alt='robot2' />
          <img className='img3' src={robot3} alt='robot3' />
        </div>
      </div>
      <ProjectTrapezoid upper={false} />
    </div>
  );
}
