import React, { useEffect, useState } from 'react';
import '../styles/components/all.css';

export default function ProjectCard(props) {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  // HACK: This is a mobile hack
  return (
    <div className='project-card-container'>
      {isMobile ? (
        <>
          <div
            className={
              props.reverse ? 'right-project-card' : 'left-project-card'
            }
          >
            <img className='project-logo' src={props.logo} alt='Project' />
            <h2>{props.role}</h2>
            <div className='project-image-container'>
              <img className='project-image' src={props.image} alt='Project' />
            </div>
          </div>
          <div className='fancy-rectangle' />
          <div
            className={
              props.reverse ? 'left-project-card' : 'right-project-card'
            }
          >
            <p>{props.text}</p>
            <div className='button-container'>
              <a href={props.link}>Learn more</a>
            </div>
          </div>
        </>
      ) : !props.reverse ? (
        <>
          <div
            className={
              props.reverse ? 'right-project-card' : 'left-project-card'
            }
          >
            <img className='project-logo' src={props.logo} alt='Project' />
            <h2>{props.role}</h2>
            <div className='project-image-container'>
              <img className='project-image' src={props.image} alt='Project' />
            </div>
          </div>
          <div className='fancy-rectangle' />
          <div
            className={
              props.reverse ? 'left-project-card' : 'right-project-card'
            }
          >
            <p>{props.text}</p>
            <div className='button-container'>
              <a href={props.link}>Learn more</a>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className={
              props.reverse ? 'left-project-card' : 'right-project-card'
            }
          >
            <p>{props.text}</p>
            <div className='button-container'>
              <a href={props.link}>Learn more</a>
            </div>
          </div>
          <div className='fancy-rectangle' />
          <div
            className={
              props.reverse
                ? 'right-project-card-image-group'
                : 'left-project-card'
            }
          >
            <img className='project-logo' src={props.logo} alt='Project' />
            <h2>{props.role}</h2>
            <div className='project-image-container'>
              <img className='project-image' src={props.image} alt='Project' />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
